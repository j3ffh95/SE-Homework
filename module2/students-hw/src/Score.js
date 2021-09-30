function Score(props) {
  return (
    <>
      {props.scoreObj.map(scoreObj => (
        <li>{`Date: ${scoreObj.date} -- Score: ${scoreObj.score}`}</li>
      ))}
      <hr />
    </>
  );
}

export default Score;
