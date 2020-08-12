import { useEffect, useState } from 'react'


// convention naming starts w use
const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handleMouseMove = (e) => (
      setPosition({
        x: e.pageX,
        y: e.pageY
      })
    )
    console.log("setting up event")
    document.addEventListener('mousemove', handleMouseMove)
    //Removes event listener on unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return position
}
export default useMousePosition
