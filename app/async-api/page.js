import { cookies } from "next/headers";

async function AsyncAPI() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  console.log(token);

  return <div>{token?.value || "NO TOKEN"}</div>;
}

export default AsyncAPI;
