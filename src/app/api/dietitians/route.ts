import { NextResponse } from 'next/server';
import { addDietitian, updateDietitian, deleteDietitian } from '../../../scripts/updateDietitians';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newDietitian = await addDietitian(data);
    return NextResponse.json(newDietitian);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add dietitian' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const { id, ...updates } = await request.json();
    const updated = await updateDietitian(id, updates);
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update dietitian' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { id } = await request.json();
    await deleteDietitian(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete dietitian' }, { status: 500 });
  }
} 