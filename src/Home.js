import logo from './logo.svg';
import sendAuthData from './LoginData';
import { Link } from "react-router-dom";
import './App.css';
function Home() {
    return (

        <form className='Form'>
            <img src={logo} className="app-logo-feature" alt="logo" /><br></br><br></br><br></br><br></br><br></br><br></br>
            <h2>&nbsp;User Login</h2>
            <div className='Username'>
                <input class='name' type="text" placeholder="Username" id="username"></input>
            </div>
            <div className='password'>
                <input class='pwd' type="password" placeholder="Password" id="password"></input> <br></br><br></br>
            </div>
            <button class='Login_button' id="btn" type="submit" onClick={sendAuthData}>Login</button>
            &nbsp; &nbsp;
            <br></br><p>Dont have an account?</p>
            <Link to='/Registeration'>
                SignUp
            </Link>
        </form>

    );
}

export default Home;