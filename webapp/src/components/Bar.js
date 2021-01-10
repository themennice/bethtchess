import React from 'react';
import 'fomantic-ui/dist/semantic.min.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const MyComponent = () => {
    return (
        <div>
            <Popup trigger={<div className="ui button">Activator</div>} position="right center">
                <div>Popup content here !!</div>
            </Popup>
        </div>
    );
};

export default MyComponent;
