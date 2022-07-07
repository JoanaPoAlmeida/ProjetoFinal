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
                <SidebarLink to="/Keywords" onClick={toggle}>
                    Keywords
                </SidebarLink>
                <SidebarLink to="/LangDetect" onClick={toggle}>
                    Language Detection
                </SidebarLink>
                <SidebarLink to="/Entity" onClick={toggle}>
                    Named-Entity Recognition
                </SidebarLink>
                <SidebarLink to="/POS" onClick={toggle}>
                    Part of Speech
                </SidebarLink>
                <SidebarLink to='/Sentilex' onClick={toggle}>
                    Sentiment Analysis
                </SidebarLink>
                <SidebarLink to='/Sum' onClick={toggle}>
                    Summarization
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