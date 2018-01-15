import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p>Hello {props.userName}</p>
            <p>Bye {props.userName}</p>
        </div>
    )
}

export default userOutput;