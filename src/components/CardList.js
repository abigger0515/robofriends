import React from 'react'
import Card from './Card';

const CardKList = ({robots}) => {
    // const {robots} = props;

    const cardArray = robots.map((user, i) => {
        return <Card key={i} id={user.id} name={user.name} email={user.email}/>
    });

    return (
        <div>
            {cardArray}
        </div>
    )
}

export default CardKList;