import React, { useState } from "react";
import "./styles.css";
import IMAGES from "./images.js";
function Main() {
  const [content, setContent] = useState([
    { name: "mexico Taco", image: IMAGES.Taco },
    { name: "Farmhouse Pizza", image: IMAGES.Pizza },
    { name: "Chicken Burgerr", image: IMAGES.Burger },
    { name: "Loaded Nachoes", image: IMAGES.Nachoes },
    { name: "Hakka Noodles", image: IMAGES.Noodels }
  ]);

  return (
    <div>
      <img id="icon" alt="icon" src={IMAGES.icon} />

      <div className="main">
        <h1 className="title1">What are you having For Lunch?</h1>
        <div className="title2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut <br /> laboreet.
          <hr
            style={{
              position: "relative",
              top: "10px",
              left: "-33%",
              backgroundColor: "red",
              height: 1,
              width: "33%"
            }}
          />
        </div>

        <br />
      </div>
      <div className="content">
        {content.map((each, eachIndex) => {
          return (
            <div key={eachIndex} className="eachContent">
              <div className="circle">
                <img src={each.image} alt="img" />
              </div>
              <p id="contentName">{each.name}</p>
            </div>
          );
        })}
      </div>
      <div className="title3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut <br /> laboreet.
        <hr
          id="hr"
          style={{
            position: "fixed",
            marginTop: "1%",
            color: "red",
            backgroundColor: "red",
            height: 2,
            width: "6%"
          }}
        />
      </div>
    </div>
  );
}

export default Main;
