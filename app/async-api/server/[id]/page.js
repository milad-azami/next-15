async function Details(props) {
  const params = await props.params;
  console.log(params);

  return <div>{params.id}</div>;
}

export default Details;
