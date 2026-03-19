import { NextResponse } from "next/server";
import { validateContactPayload } from "@/utils/validation";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validation = validateContactPayload(body);

        if (!validation.isValid) {
            return NextResponse.json(
                {
                    success: false,
                    message: validation.message
                },
                { status: 400 }
            );
        }

        // Simulate network/database work.
        await new Promise((resolve) => setTimeout(resolve, 900));

        return NextResponse.json(
            {
                success: true,
                message: "Message sent successfully"
            },
            { status: 201 }
        );
    } catch {
        return NextResponse.json(
            {
                success: false,
                message: "Something went wrong. Please try again."
            },
            { status: 500 }
        );
    }
}
