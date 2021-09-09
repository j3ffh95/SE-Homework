function Score(props) {
  return (
    <>
      {props.scoreObj.map(
        scoreObj => `Date: ${scoreObj.date} -- Score: ${scoreObj.score} |`
      )}
      <hr />
    </>
  );
}

export default Score;
