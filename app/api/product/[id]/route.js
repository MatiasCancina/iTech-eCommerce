import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const { id } = params;

  const docRef = doc(db, "products", id);

  const docSnapshot = await getDoc(docRef);

  return NextResponse.json(docSnapshot.data());
}
