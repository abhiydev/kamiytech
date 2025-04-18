import dbConnect from "@/app/db/dbConnect";
import { Lead } from "@/app/db/models/leads";

export async function POST(request: Request) {
  await dbConnect();
  // Get and log the incoming request body
  const body = await request.json();
  
  console.log("📥 Incoming request body:", body);

  // Check if body is an array (bulk upload) or a single object
  const leads = Array.isArray(body) ? body : [body];
  const savedLeads = [];
  const errors = [];

  for (const leadData of leads) {
    const { companyname, name, contact, address, area, city, country, cat, quality, desc, author } = leadData;

    // Basic manual validation for each lead
    if (!name || !contact || !area || !cat || !author) {
      console.log("❌ Missing required fields in one lead:", leadData);
      errors.push({ lead: leadData, error: "Missing required fields: name, contact, area, cat, and author are required" });
      // Skip this lead (or decide to throw an error instead)
      continue;
    }

    try {
      const lead = new Lead({ companyname, name, contact, address, area, city, country, cat, quality, desc, author });
      console.log("📝 Lead to be saved:", lead.toObject());
      await lead.save();
      console.log("✅ Lead saved successfully!");
      savedLeads.push(lead);
    } catch (error) {
      console.error("🔥 Error creating lead:", error);
      errors.push({ lead: leadData, error: "Error creating lead" });
      // Continue processing the remaining leads
    }
  }

  const responsePayload = {
    message: "Bulk upload completed",
    savedLeads,
    errors,
  };
  return new Response(JSON.stringify(responsePayload), { status: errors.length > 0 ? 207 : 201 });
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

