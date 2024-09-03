import style from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={style.buttonsContainer}>
        {buttonNames.map((buttonName, index) => (
          <button
            key={index}
            className={style.button}
            onClick={() => onButtonClick(buttonName)}>
            {buttonName}
          </button>
        ))}
      </div>
    </>
  );
};
export default ButtonsContainer;