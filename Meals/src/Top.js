import './css/top.css'
//Top Functional component Start hear
function Top(){
    return(
        <div className="top center">
            <div className="logo">
                <p>JS Meals</p>
            </div>
            <div className="menu">
                <ul className="center">
                    <li>Home</li>
                    <li>About</li>
                    <li>Meals</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="logging center">
                <div className="login"><a href="#a">Login</a></div>
                <div className="logout"><a href="#a">Logout</a></div>
            </div>
        </div>
    )
}
//End of Top Functional compenent 

export default Top;