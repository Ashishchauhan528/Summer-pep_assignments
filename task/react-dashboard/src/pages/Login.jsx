import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login(){
    const navigate = useNavigate();
    function handleLogin(){
        alert("Login Successful!");
        navigate("/courses");
    }

    return(
        <div className="login">
            <div className="login-box">
                <h1>Login</h1>
                <input
                    type="email"
                    placeholder="Enter Email"
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                />
                <button onClick={handleLogin}>
                    Login
                </button>
                <p>
                    Don't have an account?
                    <span onClick={()=>navigate("/signup")}>
                        Sign Up
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Login;