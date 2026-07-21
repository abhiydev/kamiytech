import type { Metadata } from "next";
import dbConnect from "@/app/db/dbConnect";
import Blog from "@/app/db/models/Blog";
import BlogDetailClient from "./BlogDetailClient";

type BlogPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { id } = await params;
  let title = "Blog Post | KamiyTech";
  let description = "Read tech and software development insights from KamiyTech.";
  let imageUrl = "https://kamiytech.com/logo.png";

  try {
    await dbConnect();
    const blog = await Blog.findById(id);
    if (blog) {
      title = `${blog.title} | KamiyTech Blog`;
      description = blog.desc ? blog.desc.substring(0, 160) : description;
      if (blog.imageURL && blog.imageURL.startsWith("http")) {
        imageUrl = blog.imageURL;
      }
    }
  } catch (err) {
    console.error("Error generating metadata for blog post:", err);
  }

  return {
    title,
    description,
    alternates: {
      canonical: `https://kamiytech.com/blog/${id}`,
    },
    openGraph: {
      title,
      description,
      url: `https://kamiytech.com/blog/${id}`,
      siteName: "KamiyTech",
      type: "article",
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { id } = await params;

  return (
    <>
      <BlogDetailClient id={id} />
    </>
  );
}
