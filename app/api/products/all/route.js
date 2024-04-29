import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/config";
import { revalidatePath } from "next/cache";

export async function GET() {
  const productsRef = collection(db, "products");

  const querySnapshot = await getDocs(productsRef);

  const docs = querySnapshot.docs.map((doc) => doc.data());

  revalidatePath('/')

  return NextResponse.json(docs);
}
