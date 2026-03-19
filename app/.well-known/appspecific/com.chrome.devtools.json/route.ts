import { NextResponse } from "next/server";

export async function GET() {
    // Chrome DevTools probes this path in local development.
    return NextResponse.json({}, { status: 200 });
}
