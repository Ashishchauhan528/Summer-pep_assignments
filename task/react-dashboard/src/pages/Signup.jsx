import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup(){

    const navigate = useNavigate();

    function handleSignup(){
        alert("Account Created Successfully!");
        navigate("/login");
    }

    return(
        <div className="signup">
            <div className="signup-box">
                <h1>Create Account</h1>
                <input
                    type="text"
                    placeholder="Full Name"
                />
                <input
                    type="email"
                    placeholder="Email"
                />
                <input
                    type="password"
                    placeholder="Password"
                />
                <input
                    type="password"
                    placeholder="Confirm Password"
                />
                <button onClick={handleSignup}>
                    Sign Up
                </button>
                <p>
                    Already have an account?
                    <span onClick={()=>navigate("/login")}>
                        Login
                    </span>
                </p>
            </div>
        </div>
    )
}

export default Signup;