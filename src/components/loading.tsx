import style from '../styles/body.module.css';
import React from 'react';

const Loader = () => {
    return(
        <div className={style.loader}>
            <h1>Loading...</h1>
        </div>
    );
}

export default Loader;