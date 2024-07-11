import { useState } from "react";

const CardColorChange = () => {
  const [cardChange, setCardChange] = useState({
    cardOne: true,
    cardTwo: false,
    cardThree: false,
  });
  
  function removeCardOne() {
    setCardChange({
      ...cardChange,
      cardThree: true,
      cardTwo: true,
      cardOne: false,
    });
  }
  function removeCardTwo() {
    setCardChange({
      ...cardChange,
      cardThree: true,
      cardOne: true,
      cardTwo: false,
    });
  }
  function removeCardThree() {
    setCardChange({
      ...cardChange,
      cardOne: true,
      cardTwo: true,
      cardThree: false,
    });
  }

  return (
    <>
      <h3 className="prince-text-rose-500 prince-text-3xl prince-text-center prince-font-bold prince-pt-7 prince-drop-shadow-md">
        Color Change Using useState
      </h3>
      <div className="prince-flex prince-justify-around prince-mt-32 prince-pl-9">
        <div>
          {cardChange.cardOne? (
            <button
              onClick={removeCardOne}
              className={` prince-ease-out prince-duration-150 prince-transition hover:ease-in prince-bg-rose-500 prince-w-44 prince-h-44 prince-rounded-lg prince-shadow-lg`}
            ></button>
          ) : (
            ""
          )}
        </div>
        <div>
          {cardChange.cardTwo? (
            <button
              onClick={removeCardTwo}
              className={` prince-ease-out prince-duration-150 prince-transition hover:ease-in prince-bg-green-500 prince-w-44 prince-h-44 prince-rounded-lg prince-shadow-lg`}
            ></button>
          ) : (
            ""
          )}
        </div>
        <div>
          {cardChange.cardThree? (
            <button
              onClick={removeCardThree}
              className={` prince-ease-out prince-duration-150 prince-transition hover:ease-in prince-bg-blue-500 prince-w-44 prince-h-44 prince-rounded-lg prince-shadow-lg`}
            ></button>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default CardColorChange;
