import React from 'react';

const People = (props) => {
    console.log(props)
    const listPeople = props.list.map((person, index) => {
        return (
            <div key={index} className="card">
                <div className="card-body">
                    <h5 className="card-title">{person.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{person.gender}</h6>
                    <p className="card-text">{person.age}</p>
                    <a href={person.url} class="card-link">See More Info</a>
                </div>
            </div>
        )
    })
    console.log(listPeople)
    return (
        <div>{listPeople}</div>
    )
}  

export default People; 