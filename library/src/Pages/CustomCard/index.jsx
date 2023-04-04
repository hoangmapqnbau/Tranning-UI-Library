import React from "react";
import "./index.css";

const CustomCard = (props) => {
  const handleClick = (action) => {
    if (action.action && typeof action.action == "function") {
      action.action();
    }

    if (action.path) {
      window.location.href = action.path;
    }
  };

  return (
    <>
      {props.dataCard &&
        props.dataCard.map((card, index) => {
          return (
            <div className="wrapper" key={index}>
              <div
                className="card"
                style={{ width: card.width ? card.width + "px" : "350px" }}
              >
                <div className="header-card">
                  <h2 className="title-card">{card.headerTitle}</h2>
                </div>
                <div className="body-card">
                  {card.imageCard && <img src={card.imageCard} alt="Paella" />}
                  <p className="content-card"> {card.contentCard}</p>
                </div>
                <div className="footer-card">
                  {card.actions &&
                    card.actions.map((action, index) => {
                      console.log(action, index);
                      return (
                        <div className="action-card" key={index}>
                          <button
                            className="card-button"
                            onClick={() => handleClick(action)}
                          >
                            {action.text}
                          </button>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
export default CustomCard;
