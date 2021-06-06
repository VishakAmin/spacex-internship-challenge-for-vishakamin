import React from 'react'
import Load from '../img/load.gif'

const Loader = () => {
    return (
        <div className="loader-container">
            <img src={Load} className="loader" alt="loading" />
        </div>
    )
}
export default Loader
