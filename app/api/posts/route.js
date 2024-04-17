import { NextResponse } from "next/server";
import { collection, getDocs} from "firebase/firestore";
import { db } from "@/firebase/config";

export async function GET() {
    try {
        const productsRef = collection(db, "posts");
        const querySnapshot = await getDocs(productsRef);
        const docs = querySnapshot.docs.map((doc) => doc.data());
        return NextResponse.json(docs);
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.error(error.message || "Internal Server Error", { status: 500 });
    }
}