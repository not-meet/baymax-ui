'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'

const ReportsPage = () => {
  const [summary, setSummary] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await axios.get('https://baymax-ui.vercel.app/api/data')
        setSummary(response.data.text)
      } catch (err) {
        setError('Failed to load report summary')
        console.error('Error fetching data:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your reports are saying that -</h1>

      {isLoading ? (
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      ) : error ? (
        <h4 className="text-red-500 text-lg">{error}</h4>
      ) : (
        <h4 className="text-lg text-gray-700">{summary}</h4>
      )}
    </div>
  )
}

export default ReportsPage
