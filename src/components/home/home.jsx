import { useState } from "react";

import "./home.scss";

const coin = {
  heads: {
    id: 1,
    imageUrl: "https://tinyurl.com/react-coin-heads-jpg",
    name: "head",
  },

  tails: {
    id: 2,
    imageUrl:
      "https://media.istockphoto.com/photos/quarter-dollar-us-coin-isolated-on-white-picture-id476142091?k=20&m=476142091&s=612x612&w=0&h=mX2-F4WTLslfOBnUrkOrp6noMqUyzAO1Iq8aHF_EGkY=",
    name: "tail",
  },
};

const coinSidesNames = Object.getOwnPropertyNames(coin);

const getRandomSideName = () => {
  const randomSide =
    coinSidesNames[Math.floor(Math.random() * coinSidesNames.length)];

  return randomSide;
};

const Home = () => {
  const [state, setState] = useState({
    currentSide: "heads",
    nFlips: 0,
    nHeads: 0,
    nTails: 0,
  });

  const flipCoin = () => {
    const newSide = getRandomSideName();
    console.log(newSide);

    console.log(newSide);
    setState((st) => {
      const newState = {
        currentSide: newSide,
        nFlips: st.nFlips + 1,
        nHeads: st.nHeads + (newSide === "heads" ? 1 : 0),
        nTails: st.nTails + (newSide === "tails" ? 1 : 0),
      };

      return newState;
    });
  };

  const handleClick = (e) => {
    flipCoin();
  };

  return (
    <div>
      <h1>Coin Flipper</h1>

      <img
        className="coin-image"
        src={`${coin[state.currentSide].imageUrl}`}
        alt={`${coin[state.currentSide].name}`}
      />
      {console.log(state)}
      <p>
        You got {`${coin[state.currentSide].name}s`}. So far there have been
        {` ${state.nFlips} `} flips, of which {` ${state.nHeads}`} heads and{" "}
        {`${state.nTails} `}
        tails.
      </p>

      <button onClick={handleClick}>Flip the coin</button>
    </div>
  );
};

export default Home;
