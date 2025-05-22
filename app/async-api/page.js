import { cookies } from "next/headers";

async function AsyncAPI() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  console.log(token);

  return (
    <div>
      <h1>Botostart | Next.js 15</h1>
      <p>{token?.value || "NO TOKEN"}</p>
    </div>
  );
}

export default AsyncAPI;
