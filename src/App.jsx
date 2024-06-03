import { useEffect } from "react"
import { useTelegram } from "./components/hooks/useTelegram"
import Header from "./components/Header/Header"


const App = () => {
  const { onToggleButton, tg} = useTelegram() 

  useEffect(() => {
    tg.ready()
  },[])



  return (
    <div>
      <Header/>
      <button onClick={onToggleButton}>toggle</button>
    </div>
  )
}

export default App