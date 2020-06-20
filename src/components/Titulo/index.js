import React from 'react';

import PropTypes from 'prop-types';

import './style.css';

function Titulo( {cor, children } ) {
    return (
        <h1 className={ cor }> {children}: {cor} </h1>
    )
}

Titulo.propTypes = {
    children: PropTypes.node.isRequired,
    cor: PropTypes.oneOf(["vermelho", "azul", "verde"])
};
Titulo.defaultProps = {
    cor: "vermelho"
}

export default Titulo;
