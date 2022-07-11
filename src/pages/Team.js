import React from 'react'
import '../App.css'
function Team() {
  return (
    <>
    <div className='container'>
        <h2>Meet The Team</h2>
        <br/>

        <div className="ro">
            <div className="column">
                <div className="card">
                    <img src={require('../images/joana.jpeg')} alt="Joana"/>
                    <div className="containr">
                        <h2>Joana Paulo Almeida</h2>
                        <p className="title">Student</p>
                        <p>Computer Science Student</p>
                        <p><button className="button-a"><a href='https://www.linkedin.com/in/joana-almeida-550260198/'>Link</a></button></p>
                    </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                    <img src={require('../images/francisco.jpg')} alt="Francisco"/>
                    <div className="containr">
                        <h2>Francisco Oliveira</h2>
                        <p className="title">Student</p>
                        <p>Computer Science Student</p>
                        <p><button className="button-a"><a href='https://www.linkedin.com/in/francisco-oliveira-2ab964195/'>Link</a></button></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="ro">
            <div className="column-2">
                <div className="card">
                <img src={require('../images/SP.jpg')} alt="SP"/>
                    <div className="containr">
                        <h2>Professor</h2>
                        <p className="title">Professor</p>
                        <p>Professor Assistant at UBI</p>
                        <p><button className="button-a"><a href='http://www.di.ubi.pt/~sebastiao/index.html'>Link</a></button></p>
                    </div>
                </div>
            </div>
  
            <div className="column-2">
                <div className="card">
                <img src={require('../images/JPC.jpg')} alt="JP" height="30%"/>
                    <div className="containr">
                        <h2>João Cordeiro</h2>
                        <p className="title">Professor</p>
                        <p>Professor Assistant at UBI</p>
                        <p><button className="button-a"><a href='https://www.di.ubi.pt/~jpaulo/'>Link</a></button></p>
                    </div>
                </div>
            </div>
  
            <div className="column-2">
                <div className="card">
                    <img src={require('../images/GD.jpg')} alt="GD"/>
                    <div className="containr">
                        <h2>Gaël Dias</h2>
                        <p className="title">Professor</p>
                        <p>Full Professor at University of Caen Normandie</p>
                        <p><button className="button-a"><a href='https://dias.users.greyc.fr/'>Link</a></button></p>
                    </div>
                </div>
            </div>
  
        </div>
    </div>
</>
  )
}

export default Team