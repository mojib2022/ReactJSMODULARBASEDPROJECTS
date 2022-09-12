import './Formvalidation.css';
import React, { useState } from 'react'

//Strat of the Formvalidation component
function Formvalidation()
{
    //declaring variable using usestate
    const[username, setusername] = useState('')
    const[email, setemail] = useState('')
    const[password, setpassword] = useState('')
    const[cpassword, setcpassword] = useState('')

    const[ucolor,setucolor] = useState('');
    const[ecolor,setecolor] = useState('');
    const[pcolor,setpcolor] = useState('');
    const[cpcolor,setcpcolor] = useState('');

    const[pusername,setpusername] = useState('');
    const[pemail, setpemail] = useState('');
    const[ppassword,setppassword] = useState('');
    const[pcpassword,setpcpassword] = useState('');
    //End of declaring variable

    //Start of the Validation Function 
    function validation(){
        if(username.length > 7)
        {
            setucolor('green');
        }
        else
        {
            setucolor('red');
            setusername('');
            setpusername('Invalid Username');
        }

        if(email.includes('@') && email.includes('.com'))
        {
            setecolor('green');
        }
        else
        {
            setecolor('red');
            setemail('');
            setpemail('Invalid email');
        }
        
        if(password.length > 7)
        {
            setpcolor('green');
        }
        else
        {
            setpcolor('red');
            setpassword('');
            setppassword('Invalid password');
        }

        if(cpassword !=='' && password === cpassword)
        {
            setcpcolor('green');
        }
        else
        {
            setcpcolor('red');
            setcpassword('');
            setpcpassword('Invalid Confirm Password');
        }
    }
//End of the Valiadtion function 
  return(
    <div className="formValidation-wrapper center">

            <h1>Javascript Form Validation</h1>
            <table className="formfields">
            <tr>
            <td>    
            <label htmlFor='username'>User Name  </label>
            </td>
            <td>
            <input type="text" name="username" id="username" placeholder={pusername}
            style={{borderColor:ucolor}} value={username} onChange={(e)=>{setusername(e.target.value)}}
            />

            
            </td>
            </tr>
            
            <tr>
            <td>    
            <label htmlFor="email">Email</label>
            </td>
            <td>
            <input type="text" name="email" id="email" placeholder={pemail}
            style={{borderColor:ecolor}} value={email} onChange={(e)=>{setemail(e.target.value)}}
            />
            
            </td>
            </tr>

            <tr>
            <td>        
            <label htmlFor="password">Password</label>
            </td>
            <td>
            <input type="password" name='passowrd' id="password" placeholder={ppassword}
            style={{borderColor:pcolor}} value={password} onChange={(e)=>{setpassword(e.target.value)}}
            />
            
            </td>
            </tr>

            <tr>
            <td>
            <label htmlFor="c_password">Confirm pass</label>
            </td>
            <td>
            <input type="password" name='c_password' id="c_password" placeholder={pcpassword}
            style={{borderColor:cpcolor}} value={cpassword} onChange={(e)=>{setcpassword(e.target.value)}}
            />
            
            </td>
            </tr>
            <tr>
            <td colSpan="2">
            <button onClick={validation}>Submit</button>
            </td>
            </tr>
            </table>
            
        </div>
    )
}
//End of the Formvalidation Component


export default Formvalidation;