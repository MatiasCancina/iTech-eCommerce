import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET() {
  const productsRef = collection(db, "products");

  const querySnapshot = await getDocs(productsRef);

  const docs = querySnapshot.docs.map((doc) => doc.data());

  return NextResponse.json(docs);
}
