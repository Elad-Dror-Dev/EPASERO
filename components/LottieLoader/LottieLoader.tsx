'use client'
import React, { useEffect, useState } from 'react'
import Lottie from 'lottie-react'
import groovyWalkAnimation from './anim2.json'

const LottieLoader = () => {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Already seen this session — dismiss on the next tick rather than setting
    // state synchronously here, which would trigger a cascading re-render.
    if (sessionStorage.getItem('loaderShown')) {
      const skip = setTimeout(() => setVisible(false), 0)
      return () => clearTimeout(skip)
    }

    document.body.style.overflow = 'hidden'

    let fadeTimer: ReturnType<typeof setTimeout>

    const timer = setTimeout(() => {
      setFadeOut(true)
      fadeTimer = setTimeout(() => {
        setVisible(false)
        sessionStorage.setItem('loaderShown', 'true')
        document.body.style.overflow = ''
      }, 1000)
    }, 3500)

    return () => {
      clearTimeout(timer)
      clearTimeout(fadeTimer)
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
