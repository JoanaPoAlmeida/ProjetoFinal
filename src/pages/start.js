import React from 'react'
import '../App.css'      

function start() {
  return (

    
    <div className='background'>
      <div className="row banner">
          <div className="banner-text">
          <div className='containerStart'>
            <img src={require('../images/logo_2.png')} alt='logo'></img>
            <h3> This is a PLN Platform integrated into the HultigCorpus Project</h3>
            <hr />
              <ul className="social">
                <a href='http://hultigcorpus.di.ubi.pt/index_eng.html' className='button'><i className="fa fa-book"></i>HultigCorpus</a>
              </ul>
            </div>
          </div>
        </div>
   
      
    </div>
  )
}

export default start