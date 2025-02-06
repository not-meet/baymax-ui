'use client'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const ReportsPage = () => {
  const [summary, setSummary] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get('https://baymax-ui.vercel.app/api/data')
        setSummary(response.data.text)
      } catch (err) {
        setError('Failed to load report summary')
        router.push('/error')
        console.error('Error fetching data:', err)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="w-full max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Your reports are saying that -</h1>

        {isLoading ? (
          <div className="w-full">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="animate-pulse p-6">
                <div className="h-48 bg-gray-200 rounded-md mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        ) : error ? (
          <h4 className="text-2xl text-red-500">{error}</h4>
        ) : (
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h4 className="text-2xl text-gray-700 leading-relaxed">{summary}</h4>
          </div>
        )}
      </div>
    </div>
  )
}

export default ReportsPage
