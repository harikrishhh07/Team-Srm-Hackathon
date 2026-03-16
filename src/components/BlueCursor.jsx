import { useEffect, useRef, useState } from 'react'

export default function BlueCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const glowRef = useRef(null)
  const rafRef = useRef(0)
  const mouseRef = useRef({ x: -100, y: -100 })
  const ringRefPos = useRef({ x: -100, y: -100 })
  const glowRefPos = useRef({ x: -100, y: -100 })
  const visibleRef = useRef(false)
  const pointerRef = useRef(false)

  const [isPointer, setIsPointer] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const updateCursor = () => {
      const dot = dotRef.current
      const ring = ringRef.current
      const glow = glowRef.current

      if (!dot || !ring || !glow) {
        rafRef.current = requestAnimationFrame(updateCursor)
        return
      }

      const { x, y } = mouseRef.current
      ringRefPos.current.x += (x - ringRefPos.current.x) * 0.24
      ringRefPos.current.y += (y - ringRefPos.current.y) * 0.24
      glowRefPos.current.x += (x - glowRefPos.current.x) * 0.14
      glowRefPos.current.y += (y - glowRefPos.current.y) * 0.14

      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`
      ring.style.transform = `translate3d(${ringRefPos.current.x}px, ${ringRefPos.current.y}px, 0)`
      glow.style.transform = `translate3d(${glowRefPos.current.x}px, ${glowRefPos.current.y}px, 0)`

      rafRef.current = requestAnimationFrame(updateCursor)
    }

    const onMove = (event) => {
      mouseRef.current = { x: event.clientX, y: event.clientY }
      const target = event.target instanceof Element ? event.target : null
      const pointerTarget =
        target?.closest('button, a, input, textarea, select, [role="button"], .nav-logo-wrapper, .cursor-magnetic') !==
        null

      if (!visibleRef.current) {
        ringRefPos.current = { x: event.clientX, y: event.clientY }
        glowRefPos.current = { x: event.clientX, y: event.clientY }
        visibleRef.current = true
        setIsVisible(true)
      }

      const nextPointerState = Boolean(pointerTarget)
      if (pointerRef.current !== nextPointerState) {
        pointerRef.current = nextPointerState
        setIsPointer(nextPointerState)
      }
    }

    const onMouseDown = () => setIsClicking(true)
    const onMouseUp = () => setIsClicking(false)
    const onMouseLeave = () => {
      visibleRef.current = false
      setIsVisible(false)
    }

    const onMouseEnter = () => {
      visibleRef.current = true
      setIsVisible(true)
    }

    rafRef.current = requestAnimationFrame(updateCursor)

    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerdown', onMouseDown)
    window.addEventListener('pointerup', onMouseUp)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onMouseDown)
      window.removeEventListener('pointerup', onMouseUp)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
    }
  }, [])

  return (
    <>
      <div
        ref={glowRef}
        className={`cursor-glow ${isVisible ? 'visible' : ''} ${isPointer ? 'active' : ''}`}
        aria-hidden="true"
      />
      <div
        ref={ringRef}
        className={`cursor-ring ${isVisible ? 'visible' : ''} ${isPointer ? 'active' : ''} ${isClicking ? 'clicking' : ''}`}
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className={`cursor-dot ${isVisible ? 'visible' : ''} ${isPointer ? 'active' : ''} ${isClicking ? 'clicking' : ''}`}
        aria-hidden="true"
      />
    </>
  )
}
