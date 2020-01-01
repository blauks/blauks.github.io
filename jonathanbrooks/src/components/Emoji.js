import React from 'react'

const Emoji = props => (
    <span role="img" aria-label= {props.label ? props.label : ""}>
        {props.emoji}
    </span>
)

export default Emoji;