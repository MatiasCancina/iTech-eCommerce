import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/firebase/config";
import { revalidateTag } from "next/cache";

export async function GET(_, { params }) {
  const { category } = params;

  const productsRef = collection(db, "products");

  const q =
    category == "all"
      ? productsRef
      : query(productsRef, where("type", "==", category));

  const querySnapshot = await getDocs(q);

  const docs = querySnapshot.docs.map((doc) => doc.data());

  revalidateTag("products");

  return NextResponse.json(docs);
}
