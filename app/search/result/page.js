async function ResultPage(props) {
  const searchParams = await props.searchParams;
  console.log(searchParams);

  return <div>{searchParams.text}</div>;
}

export default ResultPage;
