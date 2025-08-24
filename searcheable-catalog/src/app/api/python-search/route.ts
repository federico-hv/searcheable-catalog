// app/api/hello/route.ts (Next.js 13+)
export async function GET() {
  try {
    const res = await fetch("http://python:8000"); // Docker service name
    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    console.log("ERROR: ", error);
    return Response.json(
      { error: "Failed to reach Python service" },
      { status: 500 }
    );
  }
}
