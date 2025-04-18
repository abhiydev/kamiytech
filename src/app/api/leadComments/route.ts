// import { NextResponse } from "next/server";
// import { LeadComments } from "@/app/db/models/leadCommments";
// import dbConnect from "@/app/db/dbConnect";

// // Connect to the database
// dbConnect();

// // Handler to fetch all comments for a specific lead
// export async function GET(req: Request) {
//     const { searchParams } = new URL(req.url);
//     const leadId = searchParams.get("leadId");

//     if (!leadId) {
//         return NextResponse.json(
//             { error: "Missing leadId parameter" },
//             { status: 400 }
//         );
//     }

//     try {
//         const comments = await LeadComments.find({ leadId }).sort({ createdAt: -1 });
//         return NextResponse.json(comments);
//     } catch (error) {
//         return NextResponse.json(
//             { error: "Failed to fetch comments", dedetails: (error as Error).message },
//             { status: 500 }
//         );
//     }
// }

// // Handler to create a new comment
// export async function POST(req: Request) {
//     try {
//         const body = await req.json();
//         const { leadId, disposition, comment, author } = body;

//         if (!leadId || !disposition || !comment || !author) {
//             return NextResponse.json(
//                 { error: "Missing required fields" },
//                 { status: 400 }
//             );
//         }

//         const newComment = await LeadComments.create({
//             leadId,
//             disposition,
//             comment,
//             author,
//         });

//         return NextResponse.json(newComment, { status: 201 });
//     } catch (error) {
//         return NextResponse.json(
//             { error: "Failed to create comment", details: (error as Error).message },
//             { status: 500 }
//         );
//     }
// }

// // Handler to delete a comment by ID
// export async function DELETE(req: Request) {
//     const { searchParams } = new URL(req.url);
//     const commentId = searchParams.get("commentId");

//     if (!commentId) {
//         return NextResponse.json(
//             { error: "Missing commentId parameter" },
//             { status: 400 }
//         );
//     }

//     try {
//         const deletedComment = await LeadComments.findByIdAndDelete(commentId);

//         if (!deletedComment) {
//             return NextResponse.json(
//                 { error: "Comment not found" },
//                 { status: 404 }
//             );
//         }

//         return NextResponse.json({ message: "Comment deleted successfully" });
//     } catch (error) {
//         return NextResponse.json(
//             { error: "Failed to delete comment", details: (error as Error).message } },
//             { status: 500 }
//         );
//     }
// }