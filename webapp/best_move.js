var stockfish = require("stockfish");
var engine = stockfish();
// replace the fen assignment below to the output of Tanya's algorithm
var fen = "r4rk1/ppqn1ppp/2pbpn2/5b2/8/2NP1N1P/PPPBBPP1/R2Q1RK1 w - - 1 12"
var pos = "fen " + fen;

engine.onmessage = function (res)
{
    if (res === "uciok") {
        if (pos) {
            engine.postMessage("position " + pos);
            engine.postMessage("eval");
            // show board
            engine.postMessage("d");
        }
        // not working for some reason, set whatever depth and goes 25
        engine.postMessage("go depth 20");
        engine.postMessage("go ponder");
        // set ms per move
        engine.postMessage("go movetime 4200");

    } else if (res.indexOf("bestmove") > -1) {
        bestmove = res.match(/bestmove\s+(\S+)/);
        if (bestmove) {
            console.log(bestmove[1]);
            process.exit();
        }
    }
};

engine.postMessage("uci");
