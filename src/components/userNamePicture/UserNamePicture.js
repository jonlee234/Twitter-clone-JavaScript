import React from "react";
import { render } from "react-dom";
import { Component } from "react"


class UserNamePicture extends Component {
    state={
        addPicture : null

    }
    onFileChange = (e) => {
        e.preventDefault()
        this.setState({addPicture: e.target.files[0]})
        console.log(this.state)
      }
 
    render(){
        
        return ( 
        <>
        <form id ="usePicturer"  > 
        <input type= "file" ></input>
        <button onClick ={this.onFileChange} type ="submit">Submit</button> 
        </form>
        </>
        )
        

    }

}
export default UserNamePicture 