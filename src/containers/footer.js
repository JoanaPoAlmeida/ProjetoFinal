import React from 'react'
import Footer from '../components/Footer'
import Icon from '../components/icons'
import '../App.css'

export function FooterContainer() {
    return (
        <Footer>
                <Footer.Link>Copyright ©2022 All rights reserved by : <a href='http://hultigcorpus.di.ubi.pt/index_eng.html' target="_blank" className='Link' > Hultig-C</a> </Footer.Link>
        </Footer>
    )
}