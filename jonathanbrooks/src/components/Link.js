import React from 'react';

const Link = props => {
    return(
        <a href={props.link} target={props.target === "new-tab" ? "_blank" : ""}>{props.text}</a>
    )
}

export default Link;