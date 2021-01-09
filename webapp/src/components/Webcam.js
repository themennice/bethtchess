import React, { useCallback, useRef, useState } from 'react';
import Webcam from "react-webcam";
import 'fomantic-ui/dist/semantic.min.css'

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
};

const MyComponent = () => {
    const [image, setImage] = useState( null );
    const webcamRef = useRef( null );

    const capture = useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage( imageSrc );
        },
        [webcamRef, setImage]
    );

    return (
        <div>
            <Webcam
                audio={ false }
                ref={ webcamRef }
                screenshotFormat="image/jpeg"
            />
            <button className="ui inverted animate teal labeled icon button" onClick={ capture }>
                <i className="camera icon"/>
                Capture photo
            </button>
            <div className="row" style={ { background_color: '#869D05', color: '#FFFFFF' } }>
                <div className="column">
                    { image && (
                        <img
                            src={ image }
                            alt="img"/>
                    ) }
                </div>
            </div>
        </div>
    );
};

export default MyComponent;
