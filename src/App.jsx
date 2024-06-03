import { useEffect } from "react"

const tg = window.Telegram.WebApp

const App = () => {

  useEffect(() => {
    tg.ready()
  },[])

  const onClose = () => {
    tg.close()
  }


  return (
    <div>
      Worfl

      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default App