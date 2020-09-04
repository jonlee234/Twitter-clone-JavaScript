import React from 'react'
import {ExploreFormContainer} from "../components/explore-form/index"
import { MenuContainer } from "../components";
import "./explore-screen.css"
export const ExploreScreen = () =>  {
    return (
        <div>
            <MenuContainer/>
            
            <ExploreFormContainer/>
            
        </div>
    )
}
