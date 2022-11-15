import React, { useEffect } from "react";
import { useState } from "react";
import Boxes from "./boxes";
import Confetti from "./confetti";
import { nanoid } from "nanoid";
import Lost from "./lost";
import StartPage from "./startpage";

export default function Main() {
  //states

  const [box, setBox] = useState(createArray());
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [scores, setScores] = useState([]);
  const [startGame, setStartGame] = useState(false);

  //variables
  const allNumbers = box[0].number;

  const gameOver = box.every((grid) => {
    return grid.on === true && grid.number === allNumbers;
  });

  const allBoxes = box.map((grid) => {
    return (
      <Boxes
        key={grid.id}
        shown={grid.number}
        id={grid.id}
        handleClick={handleClick}
        on={grid.on}
      />
    );
  });

  //this function is used to create the initial array that is set to box both on initialization and reset
  function createArray() {
    const myArray = [];
    for (let i = 0; i < 10; i++) {
      myArray.push({
        id: nanoid(),
        number: Math.ceil(Math.random() * 6),
        on: false,
      });
    }
    return myArray;
  }

  //functions
  function getRandomNumber() {
    setBox((prevState) => {
      return prevState.map((item) => {
        const randomNumber = Math.ceil(Math.random() * 6);
        return item.on ? item : { ...item, number: randomNumber };
      });
    });
    setCount((prev) => (prev > 10 ? 0 : prev + 1));
  }

  function handleClick(id) {
    setBox((prevState) => {
      return prevState.map((obj) => {
        return obj.id === id ? { ...obj, on: !obj.on } : obj;
      });
    });
  }

  function handleReset() {
    setBox(createArray());
    setCount(0);
    setSeconds(0);
    setMinutes(0);
  }

  function handleStart() {
    setStartGame((prev) => !prev);
    handleReset();
  }

  //useEffects
  useEffect(() => {
    let myInterval = setInterval(function set() {
      if (!gameOver) {
        setSeconds((prev) => (prev >= 60 ? 0 : prev + 1));
        setMinutes((prevMinute) =>
          seconds === 60 ? prevMinute + 1 : prevMinute
        );
      } else {
        return;
      }
    }, 1000);
    return () => clearInterval(myInterval);
  }, []);

  useEffect(() => {
    const myScore = JSON.stringify(
      `${count} rolls in ${minutes} min : ${seconds} sec`
    );
    localStorage.setItem("score", myScore);
    setScores(JSON.parse(localStorage.getItem("score")));
  }, [gameOver === true]);

  return (
    <div className="main">
      {startGame ? (
        <div className="main__first-nest">
          {count > 10 ? (
            <Lost handleTryAgain={handleReset} end={handleStart} />
          ) : (
            <div className="main__second-nest">

              <div className="timer">
                {!gameOver && (
                  <div>
                    {minutes > 0 ? (
                      <span>
                        {minutes}:{seconds}
                      </span>
                    ) : (
                      <span>{`0:${seconds}`}</span>
                    )}
                  </div>
                )}
              </div>

              <div className="confetti">{gameOver && <Confetti />}</div>

              <div>
                {gameOver && (
                    <div> <h3>
                    YOU WIN {"\u2728"} {scores}
                  </h3>
                  <img src="/images/favicon.ico" /></div>
                )}
              </div>

              <div className="myBox">{allBoxes}</div>

              <div>
                {gameOver ? (
                  <div className="win-buttons">
                    <button onClick={handleReset} className="main-btn">
                      RESET
                    </button>
                    <button onClick={handleStart} className="endgame-btn2">
                      END GAME
                    </button>
                  </div>
                ) : (
                  <button onClick={getRandomNumber} className="main-btn">
                    Roll({count})
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      ) : (
        <StartPage start={handleStart} />
      )}
    </div>
  );
}
