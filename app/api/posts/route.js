import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import { revalidateTag } from "next/cache";

export async function GET() {
  const productsRef = collection(db, "posts");

  const querySnapshot = await getDocs(productsRef);

  const docs = querySnapshot.docs.map((doc) => doc.data());

  revalidateTag("posts");

  return NextResponse.json(docs);
}
