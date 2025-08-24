// app/api/hello/route.ts (Next.js 13+)
export async function GET() {
  try {
    const res = await fetch("http://golang:8080/products"); // Docker service name
    const data = await res.json();

    // throw new Error("Golang Error");

    return Response.json(data);
  } catch (error) {
    console.log("ERROR: ", error);
    return Response.json(
      { error: "Failed to reach Golang service" },
      { status: 500 }
    );
  }
}
