import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
    const navigate = useNavigate();
    return (
        <div className="home">
            <h1>Welcome to LearnHub</h1>
            <p>
                Learn today's most demanding technologies from beginner
                to advanced level.
            </p>
            <button onClick={() => navigate("/courses")}>
                Explore Courses
            </button>
        </div>
    );
}

export default Home;