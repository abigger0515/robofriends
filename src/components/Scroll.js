import React from 'react'

const Scroll = (props) => {
    return (
        <div style={{ overflowY:'scroll', bordera:'5px solid black', height:'700px'}}>
            {props.children}
        </div>
    )
}

export default Scroll