import { useEffect, useState } from 'react'
import './Form.css'
import { useTelegram } from '../../components/hooks/useTelegram'

const Form = () => {
  const [country, setCountry] = useState('')
  const [street, setStreet] = useState('')
  const [subject, setSetsubject] = useState('physical')
  const {tg} = useTelegram()

  useEffect(()=>{
     tg.MainButton.setParams({
       text: 'Send Data',
     })
  },[])

  useEffect(()=>{ 
    if(!street || !country) {
      tg.MainButton.hide()
    }else{
      tg.MainButton.show()
    }
  },[country, street])

  const onChangeCountry = (e) => {
    setCountry(e.target.value)
  }

  const onChangeStreet = (e) => {
    setStreet(e.target.value)
  }

  const onChangeSubject = (e) => {
    setSetsubject(e.target.value)
  }

  return (
    <div className="form">
      <h3>Your informations</h3>
      <input 
        className="input" 
        type="text" 
        placeholder="Enter your Country" 
        value={country}
        onChange={onChangeCountry}
      />
      <input 
        className="input" 
        type="text" 
        placeholder="Enter your Street" 
        value={street}
        onChange={onChangeStreet}
      />
      <select value={subject} onChange={onChangeSubject} className="select">
         <option value="physical">Fiz. liso</option>  
         <option value="legal">Yur. liso</option>  
      </select>
    </div>
  )
}

export default Form