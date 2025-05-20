"use client";

import { use } from "react";

function Details(props) {
  const params = use(props.params);
  console.log(params);

  return <div>{params.id}</div>;
}

export default Details;
