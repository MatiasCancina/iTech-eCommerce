import { mockData } from "@/data/mockdata";
import { NextResponse } from "next/server";

const sleep = (timer) => {
  return new Promise((resolve) => setTimeout(resolve, timer));
};
export async function GET(request, { params }) {
  const { category } = params;

  const data =
    category === "all"
      ? mockData
      : mockData.filter((item) => item.type === category);

  await sleep(1000);

  return NextResponse.json(data);
}
