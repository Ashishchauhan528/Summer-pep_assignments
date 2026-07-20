import "./Courses.css";
import courses from "../data/courses";
import CourseCard from "../components/CourseCard";

function Courses() {
    return (
        <div className="courses">
            <h1>Our Courses</h1>
            <div className="course-container">
                {
                    courses.map((course) => (
                        <CourseCard
                            key={course.id}
                            course={course}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Courses;