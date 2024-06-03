import { useEffect } from "react"
import { useTelegram } from "./components/hooks/useTelegram"


const App = () => {
  const { onToggleButton, tg} = useTelegram() 

  useEffect(() => {
    tg.ready()
  },[])



  return (
    <div>
      <button onClick={onToggleButton}>toggle</button>
    </div>
  )
}

export default App