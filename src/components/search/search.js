import React from 'react'


export const searchbar = (props) => {
    return (
        <form>
            <label>Search</label>
        <input type='search' placeholder={props.placeholder} />
        <datalist>
            
        </datalist>
        </form>
    )
}
