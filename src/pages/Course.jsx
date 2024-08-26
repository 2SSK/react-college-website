import CourseCard from "../components/CourseCard";

const Course = () => {
  return (
    <div>
      <h1>Courses</h1>
      <div className="course-list">
        <CourseCard
          title="Intermediate"
          description="Acquire intermediate skills with our comprehensive courses."
        />
        <CourseCard
          title="Degree"
          description="Pursue a degree that aligns with your passion and career goals."
        />
        <CourseCard
          title="Post Graduation"
          description="Elevate your academic profile with our post-graduation programs."
        />
      </div>
    </div>
  );
};

export default Course;
