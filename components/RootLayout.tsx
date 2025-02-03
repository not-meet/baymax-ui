'use client'

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from 'axios';

const PAGE_ROUTES = {
  1: '/',
  2: '/qr',
  3: '/page-three',
};

export function PageNavigationHandler() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number | null>(null);

  const fetchPage = async () => {
    try {
      const response = await axios.get('/api/page-tracking');
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
