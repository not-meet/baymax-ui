import { Redis } from '@upstash/redis'
import { NextRequest, NextResponse } from 'next/server'

const redis = new Redis({
  url: process.env.REDIS_REST_URL!,
  token: process.env.REDIS_REST_TOKEN!,
})

export async function POST(request: NextRequest) {
  try {
    const { page } = await request.json()
    const pageNumber = Number(page)

    if (isNaN(pageNumber) || pageNumber < 1 || !Number.isInteger(pageNumber)) {
      return NextResponse.json(
        { error: 'Invalid page number' },
        { status: 400 }
      )
    }

    // Store in Redis
    await redis.set('lastPage', pageNumber)

    return NextResponse.json({
      success: true,
      page: pageNumber
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
export async function GET() {
  try {
    // Retrieve from Redis, default to 1 if not found
    const lastPage = await redis.get('lastPage') || 1

    return NextResponse.json({
      page: Number(lastPage)
    })
  } catch (error) {
    return NextResponse.json(
      { page: 1 }
    )
  }
}
