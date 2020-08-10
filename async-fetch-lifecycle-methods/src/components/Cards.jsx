import React from 'react';

const Cards = (props) => {
    console.log(props)
    const listCards = props.list.map((film, index) => {
        return (
            <div key={index} className="card">
                <div className="card-body">
                    <h5 className="card-title">{film.title}</h5>
                    <p className="card-text">{film.description}</p>
                </div>
            </div>
        )
    })
    console.log(listCards)
    return (
        <div>{listCards}</div>
    )
}  

export default Cards; 