import style from './ButtonsContainer.module.css';
const ButtonsContainer = ()=>{
  const buttonNames = ['AC','DEL','%','/','7','8','9','*','4','5','6','-','1','2','3','+','0','.','='];
  return <>
  <div className={style.buttonsContainer}>
    {buttonNames.map((buttonName, index) => (
      <button key={index} className={style.button}>{buttonName}</button>
      ))}
  </div>  
</>
}
export default ButtonsContainer;