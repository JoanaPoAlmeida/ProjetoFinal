import pandas as pd
import re
import time
import numpy as np
from pip._vendor.pyparsing import Empty

def findWholeWord(w):
	return re.compile(r'\b({0})\b'.format(w), flags=re.IGNORECASE).search


def analyseDataset(filepath, extremeterms):
	id = ""
	tweet = ""
	df = pd.read_csv(filepath, sep=' ')
	scorePos=[]
	scoreNeg=[]
	wordPos=[]
	wordNeg=[]
	with open(extremeterms, encoding="ANSI") as extermsP:
		for linep in extermsP:
			term = linep.split('\t')
			if (float(term[1])>0):
				wordPos.append(term[0])
				score=re.split("\n", term[1])
				scorePos.append(float(term[1]))
			else:
				wordNeg.append(term[0])
				score=re.split("\n", term[1])
				scoreNeg.append(float(term[1]))

	with open("ClassifiedFile.txt", "a") as new:
		for index,row in df.iterrows():
			start_time = time.time()
			id = int(row[0])
			tweet = str(row[1])
			scoreP = 0
			scoreN = 0
			termsP = []
			termsN = []


			for wordp in wordPos:
					if findWholeWord(wordp)(tweet):
						scoreP += float(scorePos[wordPos.index(wordp)])
						termsP.append(wordp)
			for wordn in wordNeg:
					if findWholeWord(wordn)(tweet):
						scoreN += float(scoreNeg[wordNeg.index(wordn)])
						termsN.append(wordn)

			diferenc = abs(scoreP+scoreN)
			avg = (scoreP+scoreN)/2

			if (scoreP != 0 or scoreN != 0) and diferenc >= avg:
				if scoreP > (scoreN*(-1)):
					polarity = "Positive Extreme"
				elif scoreP < (scoreN*(-1)):
					polarity = "Negative Extreme"
				else:
					polarity = "Extreme"
			elif (scoreP != 0 or scoreN != 0) and diferenc < avg:
				if scoreP > (scoreN*(-1)):
					polarity = "Positive Non-Extreme"
				elif scoreP < (scoreN*(-1)):
					polarity = "Negative Non-Extreme"
				else:
					polarity = "Inconclusive"
			else:
				polarity = "Inconclusive"


			new.write(str(id) + "\t" + str(tweet.encode("utf-8")) + "\t" + str(scoreP) +
					  "\t" + str(scoreN) + "\t" + polarity + "\t" + "\t" + " | ".join(termsP) + "\t" + " | ".join(termsN) + "\n")

			print(str(id) + "\t" + str(tweet.encode("utf-8")) + "\t" + str(scoreP) +
					  "\t" + str(scoreN) + "\t" + polarity + "\t" + "\t" + " | ".join(termsP) + "\t" + " | ".join(termsN) + "\n")


			elapsed_time = time.time() - start_time
			print("ID: {}  -> Tempo {}".format( id , elapsed_time))

def analyseSentece(sentece, extremeterms):
	scorePos=[]
	scoreNeg=[]
	wordPos=[]
	wordNeg=[]
	with open(extremeterms, encoding="utf8") as extermsP:
		for linep in extermsP:
			term = linep.split('\t')
			if (float(term[1])>0):
				wordPos.append(term[0].lower())
				score=re.split("\n", term[1])
				scorePos.append(float(term[1]))
			else:
				wordNeg.append(term[0].lower())
				score=re.split("\n", term[1])
				scoreNeg.append(float(term[1]))
	#start_time = time.time()
	tweet = sentece.lower()
	scoreP = 0
	scoreN = 0
	termsP = []
	termsN = []

	for wordp in wordPos:
			if findWholeWord(wordp)(tweet):
				scoreP += float(scorePos[wordPos.index(wordp)])
				termsP.append(wordp)
	for wordn in wordNeg:
			if findWholeWord(wordn)(tweet):
				scoreN += float(scoreNeg[wordNeg.index(wordn)])
				termsN.append(wordn)

	diferenc = abs(scoreP+scoreN)
	avg = (scoreP+scoreN)/2

	if (scoreP != 0 or scoreN != 0) and diferenc >= avg:
		if scoreP > (scoreN*(-1)):
			polarity = "Positive Extreme"
		elif scoreP < (scoreN*(-1)):
			polarity = "Negative Extreme"
		else:
			polarity = "Extreme"
	elif (scoreP != 0 or scoreN != 0) and diferenc < avg:
		if scoreP > (scoreN*(-1)):
			polarity = "Positive Non-Extreme"
		elif scoreP < (scoreN*(-1)):
			polarity = "Negative Non-Extreme"
		else:
			polarity = "Inconclusive"
	else:
		polarity = "Inconclusive"

	return polarity

	#print(str(tweet) + "\t" + str(scoreP) +  "\t" + str(scoreN) + "\t" + polarity + "\t" + "\t" + " | ".join(termsP) + "\t" + " | ".join(termsN) + "\n")


	#elapsed_time = time.time() - start_time
	#print("ID: {}  -> Tempo {}".format(elapsed_time))

if __name__ == '__main__':
	path = 'ExtremeSentiLex.txt'
	choice ='0'
	while choice =='0':
		print("Menu: Choose 1 of 2 choices")
		print("Choose 1 to analyse your dataset")
		print("Choose 2 to analyse only one sentence")

		choice = input ("Please make a choice: ")

		if choice == "2":
			sentece = input("Insert the sentece you want to analyse: ")
			extremeterms = path #input("Insert the path for your extreme sentiment lexicon (or use the path for ExtremeSentiLex):")
			analyseSentece(sentece, extremeterms)

		elif choice == "1":
			print("The first two elements of the lines of your dataset must be: \n ID Text")
			filepath=input("Insert the path for your dataset: ")
			extremeterms = input("Insert the path for your extreme sentiment lexicon (or use the path for ExtremeSentiLex):")
			analyseDataset(filepath, extremeterms)
		else:
			print("I don't understand your choice.")