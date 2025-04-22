// app/api/leads/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '@/app/db/dbConnect';
import { Lead } from '@/app/db/models/leads';

export async function POST(request: Request) {
  await dbConnect();
  const body = await request.json();
  const items = Array.isArray(body) ? body : [body];
  const savedLeads: typeof Lead[] = [];
  const errors: { lead: unknown; message: string }[] = [];

  for (const leadData of items) {
    interface LeadData {
      name: string;
      contact: string;
      area: string;
      cat: string;
      author: string;
    }
    const { name, contact, area, cat, author } = leadData as LeadData;
    if (!name || !contact || !area || !cat || !author) {
      errors.push({
        lead: leadData,
        message: 'Missing required fields: name, contact, area, cat, author',
      });
      continue;
    }
    try {
      const created = await Lead.create(leadData);
      savedLeads.push(created);
    } catch (err: unknown) {
      errors.push({
        lead: leadData,
        message: err instanceof Error ? err.message : 'Error creating lead',
      });
    }
  }

  return NextResponse.json(
    { message: 'Bulk upload completed', savedLeads, errors },
    { status: 200 }
  );
}

export async function GET(request: Request) {
  await dbConnect();
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get('id');

    if (id) {
      const lead = await Lead.findById(id);
      if (!lead) {
        return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
      }
      return NextResponse.json(lead, { status: 200 });
    }

    const allLeads = await Lead.find();
    return NextResponse.json(allLeads, { status: 200 });
  } catch (err) {
    console.error('🔥 Error fetching leads:', err);
    return NextResponse.json(
      { error: 'Failed to fetch leads' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  await dbConnect();
  const body = await request.json();
  const { id, ...updateData } = body as { id?: string };

  if (!id) {
    return NextResponse.json(
      { error: 'Missing lead ID' },
      { status: 400 }
    );
  }

  try {
    const updated = await Lead.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!updated) {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: 'Lead updated successfully', lead: updated },
      { status: 200 }
    );
  } catch (err) {
    console.error('🔥 Error updating lead:', err);
    return NextResponse.json(
      { error: 'Failed to update lead' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  await dbConnect();
  const { id } = (await request.json()) as { id?: string };

  if (!id) {
    return NextResponse.json(
      { error: 'Missing lead ID' },
      { status: 400 }
    );
  }

  try {
    const deleted = await Lead.findByIdAndDelete(id);
    if (!deleted) {
      return NextResponse.json(
        { error: 'Lead not found' },
        { status: 404 }
      );
    }
    return NextResponse.json(
      { message: 'Lead deleted successfully' },
      { status: 200 }
    );
  } catch (err) {
    console.error('🔥 Error deleting lead:', err);
    return NextResponse.json(
      { error: 'Failed to delete lead' },
      { status: 500 }
    );
  }
}