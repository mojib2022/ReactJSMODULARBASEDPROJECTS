import React  from 'react'
import './css/footer.css'

function Footer(){
    const name ='Mohammad Majibur Rahman'
    return(
        <div className="footer center">
            <h3>Developed By</h3>
            <h4>{name}</h4>
        </div>
    )
}
export default Footer;