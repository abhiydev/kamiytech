import { z } from "zod";
import Inquiry from "@/app/db/models/Inquiry";
import dbConnect from "@/app/db/dbConnect";
import { successResponse, errorResponse } from "@/lib/api-response";

const createInquirySchema = z.object({
  name: z.string().min(1, "Name is required"),
  contact: z.string().min(1, "Contact is required"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  requirements: z.string().min(1, "Requirements are required"),
  message: z.string().optional(),
});

export async function GET() {
  try {
    await dbConnect();
    const inquiries = await Inquiry.find({}).sort({ createdAt: -1 });
    return successResponse({ inquiries });
  } catch (error) {
    console.error("GET /api/inquiry error:", error);
    return errorResponse("Failed to fetch inquiries", 500);
  }
}

export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    const parseResult = createInquirySchema.safeParse(body);
    if (!parseResult.success) {
      return errorResponse(
        "Validation Error",
        400,
        parseResult.error.flatten().fieldErrors
      );
    }

    const inquiry = await Inquiry.create(parseResult.data);
    return successResponse({ inquiry }, 201);
  } catch (error) {
    console.error("Error in POST /api/inquiry:", error);
    return errorResponse("Failed to create inquiry", 500);
  }
}
