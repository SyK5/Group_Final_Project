import React, { useContext } from "react";
import "./Like.scss";
import { MainContext} from "../contexts/Context_main";

const Like = () => {
  const { usersDispatch } = useContext(MainContext);

  return (
    <>
      <header className="header">
        <h1>ELVORA</h1>
        <p>Elegance Beyond the Ordinary</p>
      </header>

      <div className="Like-Container">
        <h2>Wishlist :</h2>
        
      </div>
    </>
  );
};

export default Like;
