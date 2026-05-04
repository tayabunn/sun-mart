import { NextResponse } from "next/server";
import db from "../../../../public/db.json";


export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  let products = db.models;

  if (category) {
    products = products.filter(
      (p) => p.category.toLowerCase() === category.toLowerCase()
    );
  }

  return NextResponse.json(products);
}
