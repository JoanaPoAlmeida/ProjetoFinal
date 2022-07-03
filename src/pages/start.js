import React from 'react'
import '../App.css'  
import Container from 'react-bootstrap/Container'    

function start() {
  return (

  
    <div className='background'>
     <Container> 
      <div className="row banner">
          <div className="banner-text">
            <img src={require('../images/logo_2.png')} alt='logo' target="_blank" className='imgcomputer'></img>
            <img src={require('../images/logo_mobile.png')} alt='logo' target="_blank" className='imgmobile'></img>
            <h3> This is a NLP Platform integrated into the HultigCorpus Project</h3>
            <hr />
              <ul className="social">
                <a href='http://hultigcorpus.di.ubi.pt/index_eng.html' target="_blank" className='button'><i className="fa fa-book"></i>HultigCorpus</a>
              </ul>
            </div>
        </div>
    </Container>
      
    </div>
  )
}

export default start