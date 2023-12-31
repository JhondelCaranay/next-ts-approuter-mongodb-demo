import { NextResponse } from "next/server";
import dbConnect from "@/utils/db";
import Post from "@/models/Post";

export const GET = async (request: Request, { params }: { params: { id: string } }) => {
  const id = params.id;

  try {
    await dbConnect();

    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};

export const DELETE = async (request: Request, { params }: { params: { id: string } }) => {
  const id = params.id;

  try {
    await dbConnect();

    await Post.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
