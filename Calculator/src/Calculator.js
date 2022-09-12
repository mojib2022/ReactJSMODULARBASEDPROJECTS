//Importing necessary things
import React, { useState } from 'react'
import './css/Calculator.css';


//Calculator function component
function Calculator(){
    //Function to declaring variable using usestate hook
    const [inputvalue, setinputvalue] = useState('')

    //Function to set value in the inputvalue vaiable
    const display =(str)=>{
        setinputvalue(inputvalue+str)
    }
    
    //Function to clear value of the inputvalue variable
    const clr = ()=>{
        setinputvalue('')
    }
    
    //Function to calculate the user input value 
    const calculate =()=>{
         // eslint-disable-next-line
        let result = eval(inputvalue);
        // eslint-disable-next-line
        setinputvalue(result);
    }

    return(
        <div className="calculator center">
        <h1>Javascript Calculator</h1>
    <table>
        <tr>
            <td colSpan="3"><input type="text" id="result" value={inputvalue} onChange={(e)=>setinputvalue(e.target.value)}></input></td>
            <td><input type="button" value="C" onClick={()=>clr()}></input></td>
        </tr>
        <tr>
            <td><input type="button" value="1" onClick={()=>display('1')}></input></td>
            <td><input type="button" value="2" onClick={()=>display('2')}></input></td>
            <td><input type="button" value="3" onClick={()=>display('3')}></input></td>
            <td><input type="button" value="/" onClick={()=>display('/')}></input></td>
        </tr>
        <tr>
            <td><input type="button" value="4" onClick={()=>display('4')}></input></td>
            <td><input type="button" value="5" onClick={()=>display('5')}></input></td>
            <td><input type="button" value="6" onClick={()=>display('6')}></input></td>
            <td><input type="button" value="-" onClick={()=>display('-')}></input></td>
        </tr>
        <tr>
            <td><input type="button" value="7" onClick={()=>display('7')}></input></td>
            <td><input type="button" value="8" onClick={()=>display('8')}></input></td>
            <td><input type="button" value="9" onClick={()=>display('9')}></input></td>
            <td><input type="button" value="+" onClick={()=>display('+')}></input></td>
        </tr>
        <tr>
            <td><input type="button" value="." onClick={()=>display('.')}></input></td>
            <td><input type="button" value="0" onClick={()=>display('0')}></input></td>
            <td> <input type="button" value="=" onClick={()=>calculate()}></input></td>
            <td><input type="button" value="*" onClick={()=>display('*')}></input></td>
        </tr>
    </table>

    </div>

    )
}
//End of Calculator Function Component

export default Calculator;