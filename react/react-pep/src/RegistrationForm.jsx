import { useEffect, useRef, useState } from "react";

const initialForm = {
  name: "",
  email: "",
  age: "",
  city: "",
  role: "Student",
  gender: "",
  skills: [],
};

function RegistrationForm() {
  const [formData, setFormData] = useState(initialForm);
  const [students, setStudents] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState("");

  const nameRef = useRef(null);
  const fileRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  useEffect(() => {
    if (!selectedFile) {
      setPreview("");
      return;
    }

    const url = URL.createObjectURL(selectedFile);
    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [selectedFile]);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSkill(e) {
    const { value, checked } = e.target;

    if (checked) {
      setFormData((prev) => ({
        ...prev,
        skills: [...prev.skills, value],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        skills: prev.skills.filter((skill) => skill !== value),
      }));
    }
  }

  function handleFile(e) {
    const file = e.target.files[0];

    if (file) {
      setSelectedFile(file);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const student = {
      id: Date.now(),
      ...formData,
      image: preview,
    };

    setStudents((prev) => [...prev, student]);

    setFormData(initialForm);
    setSelectedFile(null);
    setPreview("");

    if (fileRef.current) {
      fileRef.current.value = "";
    }

    nameRef.current.focus();
  }

  function deleteStudent(id) {
    setStudents((prev) => prev.filter((student) => student.id !== id));
  }

  function resetForm() {
    setFormData(initialForm);
    setSelectedFile(null);
    setPreview("");

    if (fileRef.current) {
      fileRef.current.value = "";
    }

    nameRef.current.focus();
  }

  return (
    <div>
      <h1>Student Registration Form</h1>

      <h3>Total Students : {students.length}</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            ref={nameRef}
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label>Role : </label>

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option>Student</option>
            <option>Scholar</option>
            <option>Teacher</option>
          </select>
        </div>

        <br />

        <div>
          <label>Gender : </label>

          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formData.gender === "Male"}
            onChange={handleChange}
          />
          Male

          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formData.gender === "Female"}
            onChange={handleChange}
          />
          Female
        </div>

        <br />

        <div>
          <label>Skills :</label>

          <input
            type="checkbox"
            value="React"
            onChange={handleSkill}
          />
          React

          <input
            type="checkbox"
            value="Java"
            onChange={handleSkill}
          />
          Java

          <input
            type="checkbox"
            value="Python"
            onChange={handleSkill}
          />
          Python
        </div>

        <br />

        <div>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            onChange={handleFile}
          />
        </div>

        <br />

        {preview && (
          <img
            src={preview}
            alt="preview"
            width="150"
            height="150"
          />
        )}

        <br />
        <br />

        <button type="submit">Add Student</button>

        <button
          type="button"
          onClick={resetForm}
          style={{ marginLeft: "10px" }}
        >
          Reset
        </button>
      </form>

      <hr />

      {students.map((student) => (
        <div
          key={student.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "15px",
          }}
        >
          {student.image && (
            <img
              src={student.image}
              width="120"
              height="120"
              alt="student"
            />
          )}

          <h3>{student.name}</h3>

          <p>Email : {student.email}</p>

          <p>Age : {student.age}</p>

          <p>City : {student.city}</p>

          <p>Role : {student.role}</p>

          <p>Gender : {student.gender}</p>

          <p>Skills : {student.skills.join(", ")}</p>

          <button onClick={() => deleteStudent(student.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default RegistrationForm;