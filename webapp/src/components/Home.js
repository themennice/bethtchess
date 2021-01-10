import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import 'fomantic-ui/dist/semantic.min.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Webcam from "./Webcam";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;
  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  margin: 20px;
  cursor: pointer;
  display: flex;
  background: transparent;
  color: #fff;
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;
  ${Image}:nth-child(1) {
    top: 10px;
    left: 10px;
  }
  ${Image}:nth-child(2) {
    top: 170px;
    right: 10px;
  }
  ${Image}:nth-child(3) {
    top: 350px;
    left: 50px;
  }
  ${Image}:nth-child(4) {
    bottom: 100px;
    right: 75px;
  }
`;

const Hero = () => {
    const fadeLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
    };

    const [atHome, setAtHome] = useState(true);
    const checkPermission = () => {
        navigator.permissions.query({name: "camera"})
            .then(({state}) => {
                    if(state === "prompt"){
                        localStorage.setItem( "camera", "denied" );
                    }else if(state === "granted"){
                        localStorage.setItem( "camera", "allowed" );
                    }
                    console.log(state);
                },
                e => {
                    localStorage.setItem( "camera", "denied" );
                    console.log(e);
                });
    }

    const handleClick = () => {

        if(isCameraAllowed()){
            setAtHome(false);
        }else{
            navigator.getUserMedia (
                // constraints
                {
                    video: true,
                    audio: false
                },

                // successCallback
                function(localMediaStream) {
                    setAtHome(false)
                },

                function(err) {
                    console.log("User denied camera permissions")
                }
            );
        }
    }

    const isCameraAllowed = () => {
        return localStorage.getItem("camera") === "allowed";
    }

    PermissionStatus.onchange = function() {
        if(isCameraAllowed()){
            setAtHome(false);
        }else{
            setAtHome(true);
        }
    }

    if(atHome){
        return (
            <Section>
                <Container>
                    <ColumnLeft>
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                        >
                            Welcome to BethtChess
                        </motion.h1>
                        <motion.p
                            variants={fadeLeft}
                            initial='hidden'
                            animate='visible'
                            transition={{ duration: 1 }}
                        >
                            Journey to chess mastery
                        </motion.p>


                        <Popup
                            trigger={
                                <Button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{
                                        scale: 0.95,
                                        backgroundColor: '#67F6E7',
                                        border: 'none',
                                        color: '#000'
                                    }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { duration: 1.5 } }}
                                >
                                    Get Started
                                </Button>}
                            modal
                            nested
                        >
                            {close => (
                                <div className="modal">
                                    <button className="close" onClick={close}>
                                        &times;
                                    </button>
                                    <div className="header"> Betht Chess </div>
                                    <div className="content">
                                        {' '}
                                        To use BethtChess, you need to give us permission to use your camera.
                                        <br />
                                    </div>
                                    <div className="actions">
                                        <button
                                            onClick={handleClick }
                                            className="blue-button">
                                            <i className="camera icon"/>
                                            Allow Camera
                                        </button>
                                        <button
                                            className="blue-button"
                                            onClick={() => {
                                                close();
                                            }}
                                        >
                                            <i className="cancel icon"/>
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            )}
                        </Popup>


                        {/*<Button*/}
                        {/*    onClick={handleClick}*/}
                        {/*    whileHover={{ scale: 1.05 }}*/}
                        {/*    whileTap={{*/}
                        {/*        scale: 0.95,*/}
                        {/*        backgroundColor: '#67F6E7',*/}
                        {/*        border: 'none',*/}
                        {/*        color: '#000'*/}
                        {/*    }}*/}
                        {/*    initial={{ opacity: 0 }}*/}
                        {/*    animate={{ opacity: 1, transition: { duration: 1.5 } }}*/}
                        {/*>*/}
                        {/*    Get Started*/}
                        {/*</Button>*/}

                    </ColumnLeft>
                    <ColumnRight>
                        <Image
                            src="./images/queen.svg"
                            alt='queen'
                            whileTap={{ scale: 0.9 }}
                            drag={true}
                            style={{display: 'flex'}}
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                        />
                        <Image
                            src="./images/pawn.svg"
                            alt='pawn'
                            style={{display: 'flex'}}
                            whileTap={{ scale: 0.9 }}
                            drag={true}
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
                        />
                        <Image
                            src="./images/horse.svg"
                            alt='horse'
                            style={{display: 'flex'}}
                            whileTap={{ scale: 0.9 }}
                            drag={true}
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
                        />
                    </ColumnRight>
                </Container>
            </Section>
        );
    }else{
        return (
            <div>
                <Webcam/>
            </div>
        )
    }
};

export default Hero;