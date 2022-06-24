
export default class APIService{

	// Insert a Text
	
	static InsertText(body){
		return fetch(`http://localhost:5000/langDetect`,{
      		'method':'POST',
      		 headers : {
      		'Content-Type':'application/json'
      },
      body:JSON.stringify(body)
    })
	.then(response => response.json())
	.catch(error => console.log(error))
	}

	

	//adicionar metodos aqui para os serviços de post

}