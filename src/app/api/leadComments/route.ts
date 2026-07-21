import { z } from "zod";
import { LeadComments } from "@/app/db/models/leadComments";
import dbConnect from "@/app/db/dbConnect";
import { successResponse, errorResponse } from "@/lib/api-response";

const createCommentSchema = z.object({
  leadId: z.string().min(1, "leadId is required"),
  disposition: z.string().min(1, "disposition is required"),
  comment: z.string().min(1, "comment is required"),
  author: z.string().min(1, "author is required"),
});

// Handler to fetch all comments for a specific lead
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const leadId = searchParams.get("leadId");

  if (!leadId) {
    return errorResponse("Missing leadId parameter", 400);
  }

  try {
    await dbConnect();
    const comments = await LeadComments.find({ leadId }).sort({ createdAt: -1 });
    return successResponse({ comments });
  } catch (error) {
    return errorResponse(
      "Failed to fetch comments",
      500,
      (error as Error).message
    );
  }
}

// Handler to create a new comment
export async function POST(req: Request) {
  try {
    await dbConnect();
    const body = await req.json();

    const parseResult = createCommentSchema.safeParse(body);
    if (!parseResult.success) {
      return errorResponse(
        "Validation Error",
        400,
        parseResult.error.flatten().fieldErrors
      );
    }

    const newComment = await LeadComments.create(parseResult.data);
    return successResponse({ comment: newComment }, 201);
  } catch (error) {
    return errorResponse(
      "Failed to create comment",
      500,
      (error as Error).message
    );
  }
}

// Handler to delete a comment by ID
export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const commentId = searchParams.get("commentId");

  if (!commentId) {
    return errorResponse("Missing commentId parameter", 400);
  }

  try {
    await dbConnect();
    const deletedComment = await LeadComments.findByIdAndDelete(commentId);

    if (!deletedComment) {
      return errorResponse("Comment not found", 404);
    }

    return successResponse({ message: "Comment deleted successfully" });
  } catch (error) {
    return errorResponse(
      "Failed to delete comment",
      500,
      (error as Error).message
    );
  }
}