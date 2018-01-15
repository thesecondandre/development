import React from 'react';

const validation = (props) => {
    let resposta = '';
    if(props.tamanho < 5) {
        resposta = 'Text too short';
    } else {
        resposta = 'Text long enough';
    }
    return <p>{resposta}</p>
}

export default validation;