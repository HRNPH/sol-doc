import { NextResponse } from "next/server";
import ContractController from "@/controllers/ContractController";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, content } = body;
    const result = await ContractController.generateContract({
      title,
      content,
    });
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to generate contract clauses" },
      { status: 500 }
    );
  }
}
