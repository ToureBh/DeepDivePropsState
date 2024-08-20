import React from 'react';


export const JournalEntry = props => { //hay que poner export porque es un modulo de java script
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
};
