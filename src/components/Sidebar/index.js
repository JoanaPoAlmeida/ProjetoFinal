import React from 'react'
import { Link } from 'react-router-dom';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarLink,  
    SidebarMenu,
    SidebarRoute,
    SideBtnWrap
} from './SidebarElements'
import '../../App.css'

const Sidebar = ({ isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
               <SidebarLink to="/Entity" onClick={toggle}>
                    Entity
                </SidebarLink> 
                <SidebarLink to="/Keywords" onClick={toggle}>
                    Multi-Rake
                </SidebarLink>
                <SidebarLink to="/LangDetect" onClick={toggle}>
                    Language Detect
                </SidebarLink>
                <SidebarLink to="/POS" onClick={toggle}>
                    Part of Speech
                </SidebarLink>
                <SidebarLink to='/Sum' onClick={toggle}>
                    Summarization
                </SidebarLink>
                <SidebarLink to='/Sentilex' onClick={toggle}>
                    Sentiment Analysis
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <a href='http://hultigcorpus-api.di.ubi.pt/' target="_blank" activestyle="true" className='SideBtnWrap'>
                API
                </a>
                <SidebarRoute to="/Team">
                    Team
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar