// app/api/page/route.ts
import { NextRequest, NextResponse } from 'next/server'
export function createPageTracker() {
  let lastPage = 1;

  return {
    async POST(request: NextRequest) {
      try {
        const { page } = await request.json()
        const pageNumber = Number(page)

        if (isNaN(pageNumber) || pageNumber < 1 || !Number.isInteger(pageNumber)) {
          return NextResponse.json(
            { error: 'Invalid page number' },
            { status: 400 }
          )
        }

        lastPage = pageNumber

        return NextResponse.json({
          success: true,
          page: lastPage
        })
      } catch (error) {
        return NextResponse.json(
          { error: 'Failed to process request' },
          { status: 500 }
        )
      }
    },

    GET() {
      return NextResponse.json({
        page: lastPage
      })
    }
  }
}

const pageTracker = createPageTracker()
export const POST = pageTracker.POST
export const GET = pageTracker.GET
