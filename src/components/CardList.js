import React from 'react'
import Card from './Card';

const CardList = ({robots}) => {
    // if (true) {
    //     return new Error('NOOOO!')
    // }
    const cardArray = robots.map((user, i) => {
        return <Card key={i} id={user.id} name={user.name} email={user.email}/>
    });

    return (
        <div>
            {cardArray}
        </div>
    )
}

export default CardList;