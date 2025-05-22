async function Details(props) {
  const params = await props.params;
  console.log(params);

  return (
    <div>
      <h1>Details Page | Server</h1>
      <p>{params?.id}</p>
    </div>
  );
}

export default Details;
