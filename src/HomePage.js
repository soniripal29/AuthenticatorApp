import { Link } from "react-router-dom";
import './homepage.css';
export default function HomePage() {
    return (
        <header>
            <div className="wrapper">
                <ul className="nav-area">
                    <Link to='/profile'>
                        My Profile
                    </Link>
                    <Link to='/'>
                        logout
                    </Link>
                </ul>
            </div>
            <div className="welcome-text">
                <h1>Welcome</h1>
            </div>
        </header>
    );
}