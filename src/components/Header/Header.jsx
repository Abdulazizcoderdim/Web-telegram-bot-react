import Button from '../Button/Button'
import { useTelegram } from '../hooks/useTelegram'
import './Header.css'

const Header = () => {
  const { user, onClose} = useTelegram() 

  return (
    <div className="header">
      <Button style={{color: 'red'}} onClick={onClose}>Close</Button>
      <span className="username">
        {user?.username}</span>
    </div>
  )
}

export default Header
