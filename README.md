# BethtChess

The best chess prediction

## Context
The goal of the project is to build a model able to generate FEN description based on a schematic image of a chess board.

## Content
100000 images of a randomly generated chess positions of 5-15 pieces (2 kings and 3-13 pawns/pieces)
Images were generated using 28 styles of chess boards and 32 styles of chess pieces totaling 896 board/piece style combinations.

Images were generated using this custom-build tool

All images are 400 by 400 pixels.

Training set: 80000 images
Test set: 20000 images
Pieces were generated with the following probability distribution:

30% for Pawn
20% for Bishop
20% for Knight
20% for Rook
10% for Queen
2 Kings are guaranteed to be on the board.

Labels are in a filename in Forsyth–Edwards Notation format, but with dashes instead of slashes.

## Acknowledgements
Chess.com for providing images of pieces and boards.

## Note
Some positions may be illegal such as both kings are under check.

## Inspiration
2020 has definitely been the year of chess. Between 2020 locking everyone indoors, and Netflix's Queen Gambit raking in 62 million viewers, everyone is either talking about chess, or watching others play chess.

## What it does
Have you ever wanted to see chess through the eyes of chess prodigy Beth Harmon? Where prodigies and beginners meet, BethtChess is an innovative software that takes any picture of a chessboard and instantly returns the next best move given the situation of the game. Not only does it create an experience to help improve your own chess skills and strategies, but you can now analyze chessboards in real-time while watching your favourite streamers on Twitch.

## How we built it
IN A NUTSHELL:

Take picture of the chessboard
Turn position into text (by extracting the FEN code of it by using some machine learning model)
Run code through chess engine (we send the FEN code to stockfish (chess engine))
Chess engine will return next best move to us
Display results to the user
Some of our inspiration came from Apple's Camera app's ability to identify the URL of QR codes in an instant -- without even having to take a picture.

## Front-end Technology

Figma - Used for prototyping the front end
ReactJS - Used for making the website
HTML5 + CSS3 + Fomantic-UI
React-webcam
Styled-components
Framer-motion
Back-end Technology

OpenCV - Convert image to an ortho-rectified chess board
Kaggle - Data set which has 100,000 chess board images
Keras - Deep Learning (DL) model to predict FEN string
Stockfish.js - The most powerful chess engine
NodeJS - To link front-end, DL model and Stockfish
User Interface

Figma was the main tool we used to design a prototype for the UI/UX page. Here's the link to our prototype: [https://www.figma.com/proto/Vejv1dzQyZ2ZGOMoFw5w2L/BethtChess?node-id=4%3A2&scaling=min-zoom]

Website

React.js and node.js were mainly used to create the website for our project (as it is a web app).

Predicting next best move using FEN stream

To predict the next best move, Node.js (express module) was used and stockfish.js was used to communicate with the most powerful chess engine so that we could receive information from the API to deliver to our user. We also trained the Deep Learning model with Keras and predicted the FEN string for the image taken from the webcam after image processing using OpenCV.

## Challenges we ran into
Whether if it's 8pm, 12am, 4am, it doesn't matter to us. Literally. Each of us live in a different timezone and a large challenge was working around these differences. But that's okay. We stayed resilient, optimistic, and determined to finish our project off with a bang!

## Learning Curves 
It's pretty safe to say that all of us had to learn SOMETHING on the fly. Machine learning, image recognition, computing languages, navigating through Github, are only some of the huge learning curves we had to overcome. Not to mention, splitting the work and especially connecting all components together was a challenge that we had to work extra hard to achieve.

Here's what Melody has to say about her personal learning curve: At first, it felt like I didn't know ANYTHING. Literally nothing. I had some Python and Java experience but now I realize there's a whole other world out there full of possibilities, opportunities, etc. What the heck is an API? What's this? What's that? What are you doing right now? What is my job? What can I do to help? The infinite loop of questions kept on racing through my head. Honestly, though, the only thing that got me through all this was my extremely supportive team!!! They were extremely understanding, supportive, and kind and I couldn't have asked for a better team. Also, they're so smart??? They know so much!!

## Accomplishments that we're proud of
Only one hour into the hackathon (while we were still trying to work out our idea), one of our members already had a huge component of the project (a website + active camera component + "capture image" button) as a rough draft. Definitely, a pleasant surprise for all of us, and we're very proud of how far we've gotten together in terms of learning, developing, and bonding! As it was most of our members' first hackathon ever, we didn't know what to expect by the end of the hackathon. But, we managed to deliver a practically fully working application that connected all components that we originally planned. Obviously, there is still lots of room for improvement, but we are super proud of what we achieved in these twenty-four hours, as well as how it looks and feels.

## What we learned
Our team consisted of students from high school all the way to recent graduates and our levels of knowledge vastly differed. Although almost all of our team consisted of newbies to hackathons, we didn't let that stop us from creating the coolest chess-analyzing platform on the web. Learning curves were huge for some of us: APIs, Javascript, node.js, react.js, Github, etc. were some of the few concepts we had to wrap our head around and learn on the fly. While more experienced members explored their limits by understanding how the stockfish.js engine works with APIs, how to run Python and node.js simultaneously, and how the two communicate in real-time.

Because each of our members lives in a different time zone (including one across the world), adapting to each other's schedules was crucial to our team's success and efficiency. But, we stayed positive and worked hard through dusk and dawn together to achieve goals, complete tasks, and collaborate on Github.

## What's next for BethtChess?
Maybe we'll turn it into an app available for iOS and Android mobile devices? Maybe we'll get rid of the "capture photo" so that before you even realize, it has already returned the next best move? Maybe we'll make it read out the instructions for those with impaired vision so that they know where to place the next piece? You'll just have to wait and see :)

Built With


## What it does

## How I built it

## Challenges I ran into

## Accomplishments that I'm proud of

## What I learned

## What's next for Say Yes to Chess!

=======
Best chess move
