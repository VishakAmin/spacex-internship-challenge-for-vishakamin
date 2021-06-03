import React from 'react'
import Load from '../img/load.gif'

const Loader = () => {
    return (
        <div className="fp-container">
            <img src={Load} className="fp-loader" alt="loading" />
        </div>
    )
}

export default Loader
