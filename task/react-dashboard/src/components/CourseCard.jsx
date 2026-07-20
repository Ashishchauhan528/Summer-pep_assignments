import "./CourseCard.css";

function CourseCard({ course }) {
    return (
        <div className="course-card">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <h3>{course.price}</h3>
            <button>Enroll Now</button>
        </div>
    );
}

export default CourseCard;