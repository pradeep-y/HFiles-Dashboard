export async function POST(req) {
  const body = await req.json();
  console.log("Profile saved:", body);
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
