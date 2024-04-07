import { mockData } from "@/data/mockdata";
import { NextResponse } from "next/server";

const sleep = (timer) => {
  return new Promise((resolve) => setTimeout(resolve, timer));
};

export async function GET(_, { params }) {
  const { id } = params;
  const data = mockData.find((p) => p.id === parseInt(id, 10));

  await sleep(1000);

  // Pasar el objeto data directamente a NextResponse.json()
  return NextResponse.json(data);
}
