import dbConnect from "@/app/db/dbConnect";
import { Lead } from "@/app/db/models/leads";

export async function POST(request: Request) {
  await dbConnect();

  // Get and log the incoming request body
  const body = await request.json();
  console.log("📥 Incoming request body:", body);

  // Destructure the fields from the body
  const {
    companyname,
    name,
    contact,
    address,
    area,
    city,
    country,
    cat,
    quality,
    desc,
    author,
  } = body;

  // Basic manual validation (return an error if required fields are missing)
  if (!name || !contact || !area || !cat || !author) {
    console.log("❌ Missing required fields");
    return new Response(
      JSON.stringify({ error: "Missing required fields: name, contact, area, cat, and author are required" }),
      { status: 400 }
    );
  }

  console.log("✅ Data ready to save:", body);
  console.log("💾 Final lead to save in DB:", {
    companyname, name, contact, address, area, city, country, cat, quality, desc, author
  });  

  try {
    const lead = new Lead({
      companyname,
      name,
      contact,
      address,
      area,
      city,
      country,
      cat,
      quality,
      desc,
      author,
    });

    console.log("📝 Lead to be saved:", lead.toObject());
    await lead.save();
    console.log("✅ Lead saved successfully!");
    return new Response(JSON.stringify({ message: "Lead added successfully", author }), { status: 201 });
  } catch (error) {
    console.error("🔥 Error creating lead:", error);
    return new Response(JSON.stringify({ error: "Error creating lead" }), { status: 500 });
  }
}

export async function GET() {
  await dbConnect();

  try {
    const leads = await Lead.find();
    return new Response(JSON.stringify(leads), { status: 200 });
  } catch (error) {
    console.error("🔥 Error fetching leads:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch leads" }), { status: 500 });
  }
}

export async function PUT(request: Request) {
  await dbConnect();

  const body = await request.json();
  const { id, ...updateData } = body;

  if (!id) {
    return new Response(JSON.stringify({ error: "Missing lead ID" }), { status: 400 });
  }

  try {
    const updatedLead = await Lead.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedLead) {
      return new Response(JSON.stringify({ error: "Lead not found" }), { status: 404 });
    }
    return new Response(JSON.stringify({ message: "Lead updated successfully", lead: updatedLead }), { status: 200 });
  } catch (error) {
    console.error("🔥 Error updating lead:", error);
    return new Response(JSON.stringify({ error: "Failed to update lead" }), { status: 500 });
  }
}

export async function DELETE(request: Request) {
  await dbConnect();

  const body = await request.json();
  const { id } = body;

  if (!id) {
    return new Response(JSON.stringify({ error: "Missing lead ID" }), { status: 400 });
  }

  try {
    const deletedLead = await Lead.findByIdAndDelete(id);
    if (!deletedLead) {
      return new Response(JSON.stringify({ error: "Lead not found" }), { status: 404 });
    }
    return new Response(JSON.stringify({ message: "Lead deleted successfully" }), { status: 200 });
  } catch (error) {
    console.error("🔥 Error deleting lead:", error);
    return new Response(JSON.stringify({ error: "Failed to delete lead" }), { status: 500 });
  }
}
