import style from "./Display.module.css";
// const Display = ()=>{
// return
// <input type="text" className={style.display}/>

// }

const Display = ({ displayValue }) => {
  return (
    <>
      <input
        type="text"
        className={style.display}
        value={displayValue}
        readOnly
      />
      ;
    </>
  );
};

export default Display;
