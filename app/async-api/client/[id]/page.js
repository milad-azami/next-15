"use client";

import { use } from "react";

function DetailsPage(props) {
  const params = use(props.params);
  console.log(params);

  return (
    <div>
      <h1>Details Page | Client</h1>
      <p>{params?.id}</p>
    </div>
  );
}

export default DetailsPage;
