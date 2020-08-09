import React from 'react'; 

const ChirpList = (props) => {
    let listItems = props.items.map(item => {
        return (
            <li key={item.id}>{item.text}</li>
        )
    })
    return (
        <ul>{listItems}</ul>
    )
}

export default ChirpList; 