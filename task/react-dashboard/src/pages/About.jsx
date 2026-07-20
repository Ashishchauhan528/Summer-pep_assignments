import "./About.css";

function About() {
    return (
        <div className="about">
            <h1>About LearnHub</h1>
            <p>
                LearnHub is a simple React Dashboard created for students
                to explore different programming courses.
            </p>
            <div className="features">
                <div className="feature">
                    <h3>📚 Quality Courses</h3>
                    <p>Learn from beginner to advanced level.</p>
                </div>
                <div className="feature">
                    <h3>💻 Practical Learning</h3>
                    <p>Hands-on examples with every course.</p>
                </div>
                <div className="feature">
                    <h3>🚀 Career Growth</h3>
                    <p>Improve your development skills.</p>
                </div>
            </div>
        </div>
    );
}

export default About;