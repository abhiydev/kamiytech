import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/app/db/dbConnect";
import Blog from "@/app/db/models/Blog";

/**
 * ✅ GET /api/blog
 *    - Get all blogs OR a single blog by ID (if ?id= provided)
 */
export async function GET(req: NextRequest) {
  try {
    await dbConnect();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (id) {
      const blog = await Blog.findById(id);
      if (!blog) {
        return NextResponse.json(
          { success: false, error: "Blog not found." },
          { status: 404 }
        );
      }
      return NextResponse.json({ success: true, blog });
    }

    // Fetch all blogs if no ID
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, blogs });
  } catch (error) {
    console.error("❌ GET /api/blog error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

/**
 * ✅ POST /api/blog
 *    - Create a new blog with Cloudinary image URL
 */
export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    // Expecting JSON instead of form data
    const { title, desc, image } = await req.json();

    if (!title || !desc) {
      return NextResponse.json(
        { success: false, error: "Title and description are required." },
        { status: 400 }
      );
    }

    // image = Cloudinary secure_url (string)
    const blog = await Blog.create({
      title: title.trim(),
      desc: desc.trim(),
      imageURL: image || "", // keep consistent with model field
    });

    console.log(blog);

    return NextResponse.json({ success: true, blog });
  } catch (error) {
    console.error("❌ POST /api/blog error:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
