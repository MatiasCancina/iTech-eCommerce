import { db } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(_, { params }) {
  const { id } = params;

  const docRef = doc(db, "products", id.toString());

  const docSnapshot = await getDoc(docRef);

  if (!docSnapshot.exists() || docSnapshot === 'undefined') return NextResponse.json({})
  
  revalidatePath('/detail/[id]')

  return NextResponse.json(docSnapshot.data());
}
