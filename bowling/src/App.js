import './App.css';

import React, {  useState } from "react";

function App() {

const [personalNum, setPersonalNum] = useState();
const [oilLength, setOilLength] = useState();
const [breakPoint, SetBreakPoint] = useState();
const [arrow, setArrow] = useState();

const [standresult, setstandresult] = useState();
const [arrowresult, setarrowresult] = useState();
const [pinresult, setrecommendresult] = useState();
const [recbreakpoint, setrecbreakpoint] = useState();





const handleClick = () => {
  let goStraight = Number(arrow) + Number(personalNum);
  let diffboard = Number(arrow) - Number(breakPoint);
  let goLeft = Number(diffboard) / 2;
  let stand = Number(goStraight) + parseInt(goLeft);
  let recbreak = Number(oilLength) - 31;

if(breakPoint >= 13 && breakPoint <= 17){
  setrecommendresult(3)
} else if(breakPoint >= 7 && breakPoint <= 12){
  setrecommendresult(2)
} else if (breakPoint >= 2 && breakPoint <= 6){
  setrecommendresult(1)
}


  setstandresult(stand)
  setarrowresult(arrow)
  setrecbreakpoint(recbreak)
  
}



  return (
    <div className="App">
      <header className="App-header">
    
      <div className='InputContainer'>
        <label className='Label'>Personal Number</label>
        <input type='number' onChange={(e) => {setPersonalNum(e.target.value)}} value={personalNum} placeholder='Personal Number' className='InputField'/>
      </div>

      <div className='InputContainer'>
        <label className='Label'>Oil Length</label>
        <input type='number' onChange={(e) => {setOilLength(e.target.value)}} value={oilLength} placeholder='Oil Length' className='InputField'/>
      </div>
      
      <div className='InputContainer'>
        <label className='Label'>Break Point</label>
        <input type='number' onChange={(e) => {SetBreakPoint(e.target.value)}} value={breakPoint} placeholder='Break Point' className='InputField'/>
      </div>
      
      <div className='InputContainer'>
        <label className='Label'>Arrow</label>
        <input type='number' onChange={(e) => {setArrow(e.target.value)}} value={arrow} placeholder='Arrow' className='InputField'/>
      </div>

      <div className='calcbtn'>
        <button onClick={()=> {handleClick()}}>Give Me Result</button>
      </div>

      <div className='result-container'>

          <div className='result'>
            <h4>Stand: {standresult} </h4>
          </div>

          <div className='result'>
            <h4>Arrow: {arrowresult}</h4>
          </div>

          <div className='result'>
            <h4>Look at Pin: {pinresult}</h4>
          </div>

          <div className='result'>
            <h4>BreakPoint You Selected: {breakPoint}</h4>
          </div>

          <div className='result'>
            <h4>Recommended BreakPoint: {recbreakpoint}</h4>
          </div>

      </div>

      </header>
    </div>
  );
}

export default App;
