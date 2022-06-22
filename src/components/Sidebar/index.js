import React from 'react'
import { Link } from 'react-router-dom';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarLink,  
    SidebarMenu
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
               <SidebarLink to="Entity" onClick={toggle}>
                    Entity
                </SidebarLink> 
                <SidebarLink to="Keywords" onClick={toggle}>
                    Keywords
                </SidebarLink>
                <SidebarLink to="LangDetect" onClick={toggle}>
                    Language Detect
                </SidebarLink>
                <SidebarLink to="POS" onClick={toggle}>
                    Part of Speech
                </SidebarLink>
                <SidebarLink to='/Sum' onClick={toggle}>
                    Summarization
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar