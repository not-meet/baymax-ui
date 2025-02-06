'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from 'axios';

const PAGE_ROUTES = {
  100: '/activate',
  1: '/',
  2: '/listing',
  3: '/temprature/direct',
  4: '/temprature/result',
  5: '/med/cold',
  6: '/med/fever',
  7: '/med/headace',
  8: '/spray',
  9: '/qr',
  10: '/reports',
  11: '/error',
  12: '/thankyou',
  13: '/listning',
  50: '/blank'

};

export function PageNavigationHandler() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number | null>(null);

  const fetchPage = async () => {
    try {
      const response = await axios.get('https://baymax-ui.vercel.app/api/page-tracking');
      const newPageNumber = response.data.page;
      console.log(newPageNumber)
      if (newPageNumber !== currentPage) {
        setCurrentPage(newPageNumber);
        const targetRoute = PAGE_ROUTES[newPageNumber as keyof typeof PAGE_ROUTES];
        if (targetRoute) {
          router.push(targetRoute);
        }
      }
    } catch (error) {
      console.log('something went wrong while fetching the page:', error)
      router.push('/')
    }
  }

  useEffect(() => {
    fetchPage()
    const interval = setInterval(fetchPage, 2000);
    return () => clearInterval(interval)
  }, [currentPage]);

  return null;
}
