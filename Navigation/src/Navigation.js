
import { useState } from 'react';
import './css/Navigation.css';


//Navigation component
function Navigation() {
    const[status,setstatus] = useState(0);
    const[divwidth,setdivwidth] = useState(0);
    
    //Open Nav Function actioned when user click on the navigation icon
    function openNav(){
        if(status === 0)
        {
            setdivwidth('100vw');
            setstatus(1);
        }
        else{
            setdivwidth('0');
            setstatus(0);
        }
    }
    //End of Nav function

  return (
    <div className="Main">
    <button className='open' onClick={()=>openNav()}><i className="fas fa-bars"></i></button>
    <div className="navigation-wrapper center" style={{width:divwidth}}>
        <div className="navigation center">
            <ul className="center">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
           
        </div>
        
    </div>
    
    </div>
  );
}
// End of Navigation navigation component

export default Navigation;
