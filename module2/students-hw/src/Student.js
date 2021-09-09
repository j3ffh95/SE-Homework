import Score from "./Score";
function Student(props) {
  return (
    <div>
      <ul>
        {props.studentData.map((student, index) => (
          <>
            <li key={index + 1}>
              <p>{`Name: ${student.name}`}</p>
              <p>{`Bio: ${student.bio}`}</p>
              <p>
                <Score scoreObj={student.scores} />
              </p>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
}

export default Student;
