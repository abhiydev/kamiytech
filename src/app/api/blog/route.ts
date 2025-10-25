import { NextResponse, NextRequest } from "next/server";
import dbConnect from "@/app/db/dbConnect";
import Blog from "@/app/db/models/Blog";
import { writeFile } from "fs/promises";
import path from "path";
import fs from "fs";

/**
 * ✅ Utility: Ensure upload directory exists
 */
function ensureUploadDir() {
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
  return uploadDir;
}

/**
 * ✅ Utility: Save uploaded image and return its public URL
 */
async function saveImage(file: File): Promise<string> {
  const validTypes = ["image/jpeg", "image/png", "image/webp", "image/jpg"];
  if (!validTypes.includes(file.type)) {
    throw new Error("Only JPG, PNG, or WEBP files are allowed.");
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const uploadDir = ensureUploadDir();

  const ext = path.extname(file.name);
  const safeName = path
    .basename(file.name, ext)
    .replace(/[^a-zA-Z0-9_-]/g, "_");
  const filename = `${Date.now()}_${safeName}${ext}`;
  const filePath = path.join(uploadDir, filename);

  await writeFile(filePath, buffer);

  return `/uploads/${filename}`;
}

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
 *    - Create a new blog (with optional image upload)
 */
export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const formData = await req.formData();
    const title = (formData.get("title") as string)?.trim();
    const desc = (formData.get("desc") as string)?.trim();
    const file = formData.get("image") as File | null;

    if (!title || !desc) {
      return NextResponse.json(
        { success: false, error: "Title and description are required." },
        { status: 400 }
      );
    }

    let imageURL = "";
    if (file) {
      imageURL = await saveImage(file);
    }

    const blog = await Blog.create({ title, desc, imageURL });

    return NextResponse.json({ success: true, blog });
  } catch (error: Error | unknown) {
    console.error("❌ Error in POST /api/blog:", error);
    const message = error instanceof Error && 
      (error.message.includes("allowed") || error.message.includes("file"))
        ? error.message
        : "Internal Server Error";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
