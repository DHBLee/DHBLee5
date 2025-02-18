import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import UserInput from './components/UserInput'
import GenerateTicket from './components/GenerateTicket'

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    githubUsername: '',
    avatar: null,
  });

  const [isTicketVisible, setIsTicketVisible] = useState(false);

  const handleForm = (data) => {
    setFormData(data);
    setIsTicketVisible(true);
  }

  const isFormFilled = formData.fullName || formData.email || formData.githubUsername || formData.avatar;

  return (
    <div className='relative min-h-screen'>
      <Header formData={formData}/>
      {!isFormFilled && <UserInput handleSubmit={handleForm}/>}
      {isFormFilled && <GenerateTicket formData={formData} isVisible={isTicketVisible} />}

      <picture className='absolute bottom-0 left-0'>
        <source
          srcSet="/public/pattern-squiggly-line-bottom-desktop.svg"
          media='(min-width: 1440px)'
        />
        <img src="/public/pattern-squiggly-line-bottom-mobile-tablet.svg" alt="" />
      </picture>
    </div>
  )
}

export default App
