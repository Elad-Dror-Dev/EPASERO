'use client'
import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import groovyWalkAnimation from './anim2.json'

const LottieLoader = () => {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const loaderShown = sessionStorage.getItem('loaderShown')
    if (loaderShown) {
      setVisible(false)
      return
    }

    document.body.style.overflow = 'hidden'

    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        setVisible(false)
        sessionStorage.setItem('loaderShown', 'true')
        document.body.style.overflow = ''
      }, 1000)
    }, 3500)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ''
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-white transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
    >
      <Lottie animationData={groovyWalkAnimation} loop={true} />
    </div>
  )
}

export default LottieLoader
