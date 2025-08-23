export async function POST(req) {
  console.log("File uploaded");
  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
