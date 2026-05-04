import { NextResponse } from "next/server";
import db from "../../../../../db.json";

// GET /api/products/[id] — returns a single product by id
export async function GET(request, { params }) {
  const { id } = await params;
  const product = db.models.find((p) => String(p.id) === String(id));

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
