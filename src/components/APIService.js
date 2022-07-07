
export default class APIService{

	// Insert a Text
	
	static InsertText(body){
		return fetch(`http://193.136.66.29:63398/langDetect`,{
      		'method':'POST',
      		 headers : {
      		'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
	.then(response => response.json())
	.catch(error => console.log(error))
	}

	static InsertKeywords(body){
		return fetch(`http://193.136.66.29:63398/keywords`,{
      		'method':'POST',
      		 headers : {
      		'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
	.then(response => response.json())
	.catch(error => console.log(error))
	}

	static InsertSummary(body){
		return fetch(`http://193.136.66.29:63398/summary`,{
      		'method':'POST',
      		 headers : {
      		'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
	.then(response => response.json())
	.catch(error => console.log(error))
	}
	
	static InsertEntity(body){
		return fetch(`http://193.136.66.29:63398/entity`,{
      		'method':'POST',
      		 headers : {
      		'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
	.then(response => response.json())
	.catch(error => console.log(error))
	}

	static InsertPOS(body){
		return fetch(`http://193.136.66.29:63398/POS`,{
      		'method':'POST',
      		 headers : {
      		'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
	.then(response => response.json())
	.catch(error => console.log(error))
	}

	static InsertSentilex(body){
		return fetch(`http://193.136.66.29:63398/Sentilex`,{
      		'method':'POST',
      		 headers : {
      		'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
	.then(response => response.json())
	.catch(error => console.log(error))
	}

}