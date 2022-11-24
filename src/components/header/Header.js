import { Link, useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { useContext } from "react";
import { AuthContext } from '../../contexts/AuthContext';

export const Header = () => {
    const { auth } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const onLogout = () => {
        signOut(auth)
            .then(() => {
                navigate('/');
            })
            .catch((err) => {
                alert(err.message);
            })
    }

    return (
        <header className="">
            <div className="navbar">
                <div className="navbar-nav">
                    <Link to="/" className="navbar-link">
                        Home
                    </Link>
                </div>
                <div className="navbar-actions">
                    <form className="navbar-form">
                        <input
                            type="text"
                            name="search"
                            placeholder="I'm looking for..."
                            className="navbar-form-search"
                        />
                    </form>
                    <Link to="/login" className="navbar-signin">
                        <span>Login</span>
                    </Link>
                    <Link to="/register" className="navbar-signin">
                        <span>Register</span>
                    </Link>
                    <span>email</span>
                    <Link to="/order" className="navbar-signin">
                        <span>My Order</span>
                    </Link>
                    <Link to="/create" className="navbar-signin">
                        <span>Create Order</span>
                    </Link>
                    <Link to="#" className="navbar-signin" onClick={onLogout}>
                        <span>Logout</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}