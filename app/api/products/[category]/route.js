import { mockData } from "@/data/mockdata";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

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

  revalidatePath("/");

  return NextResponse.json(data);
}
