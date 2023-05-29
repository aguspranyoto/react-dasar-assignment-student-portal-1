const Table = ({ students }) => {
  const listStudents = students;

  const StudentList = () => {
    return (
      listStudents &&
      listStudents.map((student, i) => {
        return (
          <tr key={i}>
            <td>{student.id}</td>
            <td>{student.fullname}</td>
            <td>{student.birthDate}</td>
            <td>{student.gender}</td>
            <td>{student.faculty}</td>
            <td>{student.programStudy}</td>
            <td>
              <button type="button" className="delete-btn">
                <strong> Delete</strong>
              </button>
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <>
      <div className="table-container">
        <table id="table-student">
          <thead>
            <tr>
              <th>No</th>
              <th>Full Name</th>
              <th>Birth Date</th>
              <th>Gender</th>
              <th>Faculty</th>
              <th>Program Study</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            <StudentList />
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
