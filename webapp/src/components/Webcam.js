import React, { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from "react-webcam";
import 'fomantic-ui/dist/semantic.min.css'
import Popup from "reactjs-popup";

const WebcamComponent = () => {
    const countdown = 3;

    const webcamRef = useRef( null );

    const [seconds, setSeconds] = useState( countdown );
    const [isTimerActive, setTimerActive] = useState( false );
    const [loading, setLoading] = useState(false);

    let id = 0;

    const capture = useCallback(
        ( path, options ) => {
            const imageSrc = webcamRef.current.getScreenshot();
            const uploadImage = async ( image ) => {
                const formData = new FormData();
                console.log( id )
                if ( id >= 6 ) {
                    id = 0;
                }
                id++;
                //const id = Math.random().toString( 36 ).substr( 2, 9 );


                let arr = image.split( ',' ), mime = arr[ 0 ].match( /:(.*?);/ )[ 1 ],
                    bstr = atob( arr[ 1 ] ), n = bstr.length, u8arr = new Uint8Array( n );
                while ( n-- ) {
                    u8arr[ n ] = bstr.charCodeAt( n );
                }

                const file = new File( [u8arr], id + ".jpg", { type: mime } );
                formData.append( "picture", file );

                const res = await fetch( "http://localhost:4000/picture", {
                    method: "POST",
                    body: formData
                } ).then( res => res.json() );
                console.log( JSON.stringify( res ) );

                const response = await fetch( "http://localhost:4000/analyze", {
                    method: "POST",
                    body: formData
                } ).then( response => response.json() );
                console.log( JSON.stringify( response ) );
            }

            uploadImage( imageSrc ).then( r => {
                console.log( r );
            } )
        },
        []
    );


    useEffect( () => {
        const intervals = [];
        if ( isTimerActive ) {
            // 3sec timer
            intervals.push( setInterval( () => {
                setSeconds( seconds => seconds - 1 );
            }, 1000 ) );

            // take pictures
            intervals.push( setInterval( () => {
                capture();
            }, 500 ) );
        } else if ( !isTimerActive && seconds === 0 ) {
            intervals.map( interval => (
                clearInterval( interval )
            ) )
        }

        if ( seconds === 0 ) {
            setSeconds( countdown );
            setTimerActive( false );
            setLoading(false)
        }

        return () => (
            intervals.map( interval => (
                clearInterval( interval )
            ) )
        );
    }, [capture, isTimerActive, seconds] );


    return (
        <div>
            <div id="headerSegment" className="ui rounded inverted segment"
                 style={ {
                     position: 'center',
                     width: '850px',
                     alignItems: 'center',
                     alignSelf: 'center',
                     color: 'transparent',
                     display: 'block',
                     marginLeft: 'auto',
                     marginRight: 'auto',
                 } }>
                <h1 className="ui header">
                    BethtChess
                </h1>
            </div>

            <Webcam
                audio={ false }
                style={{
                    borderRadius: '15px',
                    borderColor: '#c1e6cb',
                    border: '8px solid #555'
                }}
                ref={ webcamRef }
                screenshotFormat="image/jpeg"
            />
            <div>
                { !isTimerActive ?
                    <div className="wrapper-buttons">
                        <Popup
                            style={ {
                                background: '#2C2F33',
                                margin: 0,
                                padding: 0
                            } }
                            trigger={
                                <button
                                    onClick={ () => {
                                        setLoading( false );
                                        return (
                                            <Webcam/>
                                        )
                                    } }
                                    className="blue-button">
                                    <i className="camera icon"/>
                                    CAPTURE PHOTO
                                </button>
                            }
                            modal
                            nested
                        >
                            { close => (
                                <div className="modal" style={ {
                                    background: '#99AAB5',
                                    height: '300px',
                                    alignItems: 'center',
                                    position: 'center'
                                } }>
                                    <button className="close" onClick={ close }>
                                        &times;
                                    </button>
                                    <div className="bestMoveContent"
                                    style={{
                                        position:'center',
                                        display: 'center',
                                        marginLeft: '70px',
                                        fontFamily: 'Comfortaa',
                                        color: '#ffffff',
                                        fontSize: '50px'
                                    }}>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        NEXT BEST MOVE:
                                    </div>
                                    <div
                                         style={{
                                             position:'center',
                                             display: 'center',
                                             marginLeft: '110px',
                                             fontFamily: 'Comfortaa',
                                             color: '#ffffff',
                                             fontSize: '50px'
                                         }}>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        <br/>
                                        ROOK F1 TO E1
                                    </div>
                                    <div className="actions">
                                        <button
                                            style={{
                                                marginTop: '80px'
                                            }}
                                            onClick={ close }
                                            className="blue-button">
                                            <i className="camera icon"/>
                                            SCAN AGAIN
                                        </button>
                                    </div>
                                </div>
                            ) }
                        </Popup>

                    </div> :
                    <div className="progress">
                        <div className="progress-value"/>
                    </div>
                }
            </div>
        </div>
    );
};

export default WebcamComponent;
