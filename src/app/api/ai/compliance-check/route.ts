import { NextResponse } from "next/server";
import ContractController from "@/controllers/ContractController";

export async function POST(request: Request) {
  try {
    const { content } = await request.json();
    const result = await ContractController.checkCompliance(content);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to perform compliance check" },
      { status: 500 }
    );
  }
}
