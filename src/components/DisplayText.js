import Moment from 'react-moment';

const DisplayText = (props) => {


    return (
         <div className="row">
        {/* Display the article details if article is not None */} 
   	    {props.lang(text =>{
            return (
              <div className="col-md-6 ">
                <p> { text.body } </p>
              </div>
            )
            
            })}
        </div>
    )
        
}

export default DisplayText;