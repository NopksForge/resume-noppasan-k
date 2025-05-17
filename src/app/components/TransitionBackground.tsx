'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function TransitionBackground() {
  const pathname = usePathname()
  const [bgClass, setBgClass] = useState('')
  
  useEffect(() => {
    // Determine background based on current route
    if (pathname === '/work') {
      setBgClass('bg-gradient-to-r from-teal-200 to-blue-200')
    } else if (pathname === '/about') {
      setBgClass('bg-gradient-to-r from-blue-200 to-purple-200')
    } else if (pathname === '/contact') {
      setBgClass('bg-gradient-to-r from-purple-200 to-red-200')
    }
  }, [pathname])

  return (
    <div 
      className={`fixed inset-0 transition-colors duration-700 ease-in-out ${bgClass}`} 
      style={{ zIndex: -10 }}
    />
  )
} 