import { BASE_URL } from "@/constants";

async function CachePage() {
  const response = await fetch(`${BASE_URL}/posts`, { cache: "no-store" });
  const data = await response.json();
  console.log(data);

  return <div>CachePage</div>;
}

export default CachePage;

// async request api
// export const dynamic = "force-dynamic";
