import { Redis } from "@upstash/redis";
import { NextRequest, NextResponse } from "next/server";

const redis = new Redis({
  url: process.env.REDIS_REST_URL!,
  token: process.env.REDIS_REST_TOKEN!,
})


export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json();

    if (!text) {
      return NextResponse.json(
        { error: 'Invalid text. Please provide a valid string.' },
        { status: 400 }
      )
    }

    await redis.set('savedString', text);
    return NextResponse.json({
      success: true,
      text: text
    })
  } catch (error) {
    return NextResponse.json({
      error: 'Invalid text. or maybe something went wrong'
    },
      { status: 500 })
  }
}

export async function GET() {
  try {
    const savedText = await redis.get('savedString') || ''

    return NextResponse.json({
      text: savedText
    })
  } catch (error) {
    return NextResponse.json(
      { text: '' }
    )
  }
}
