import React,{useState,useEffect,useRef} from 'react'
function Timer({setAlert}) {
    const ref= useRef()
    const [count, setCounter] = useState(30)
    useEffect(() => {
        timer()
        return () => {
            clearInterval(ref.current)
        }
    }, [])
    const timer = () => {
        ref.current = setInterval(() => {
            setCounter((p) => {
                if (p == 1) {
                    clearInterval(ref.current);
                    setAlert(true)
                }
                return p-1
            })
        },1000)
        
    }
  return (
    <div>0:{count}</div>
  )
}

export default Timer