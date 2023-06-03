import React from 'react';

function Modal({ foo, setFoo }) {
    return (
        <div className='mainModal'>
            <button className='btn btn-danger' onClick={() => setFoo(!foo)}>exit</button>
        </div>
    );
}

export default Modal;