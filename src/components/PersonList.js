import React from 'react'
import Person from './Person';

function PersonList() {
    const persons = [{
        id: 1,
        name: 'Chetan',
        age: 25
    }, {
        id: 2,
        name: "Aman",
        age: 26
    }];

    const personList = persons.map(person => <Person key={person.id} person={person}></Person>);

    return (
        <div>
            {personList}
        </div>
    )
}

export default PersonList
