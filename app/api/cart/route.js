import { NextResponse } from "next/server";

export async function POST(request) {
  const dataForm = await request.json();
  console.log(dataForm);

  return NextResponse.json('Data received!');
}