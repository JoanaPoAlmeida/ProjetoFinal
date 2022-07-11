import React from 'react'
import '../App.css'
function Team() {
  return (
    <>
    <div className='container'>
        <h2>Meet The Team</h2>
        <p>Resize the browser window to see the effect.</p>
        <br/>

        <div className="ro">
            <div className="column">
                <div className="card">
                    <img src={require('../images/person.png')} alt="Joana"/>
                    <div className="containr">
                        <h2>Joana Paulo Almeida</h2>
                        <p className="title">Student</p>
                        <p>Computer Science Student</p>
                        <p><button className="button">LinkedIn</button></p>
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
                        <p><button className="button">LinkedIn</button></p>
                    </div>
                </div>
            </div>
        </div>
        <div className="ro">
            <div className="column">
                <div className="card">
                <img src={require('../images/SP.jpg')} alt="SP"/>
                    <div className="containr">
                        <h2>John Doe</h2>
                        <p className="title">Sebastião Pais</p>
                        <p>Professor Assistant at UBI</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                </div>
            </div>
  
            <div className="column">
                <div className="card">
                <img src={require('../images/JPC.jpg')} alt="JP"/>
                    <div className="containr">
                        <h2>João Cordeiro</h2>
                        <p className="title">Professor</p>
                        <p>Professor Assistant at UBI</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                </div>
            </div>
  
            <div className="column">
                <div className="card">
                    <img src={require('../images/GD.jpg')} alt="GD"/>
                    <div className="containr">
                        <h2>Gaël Dias</h2>
                        <p className="title">Professor</p>
                        <p>Full Professor at University of Caen Normandie</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                </div>
            </div>
  
        </div>
    </div>
</>
  )
}

export default Team