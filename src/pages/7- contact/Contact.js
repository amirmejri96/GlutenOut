import React from 'react'
import './Contact.css'
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("movjwqnq");
  if (state.succeeded) {
    return <p>Message envoyé avec succés 👌</p>;
  }
  return (
    <section id='Contact' className='contact-us'>
      <div className="flex">
        <h1 className='title'>Contactez Nous</h1>
      </div>
      <p className='sub-title'>Contactez nous pour plus d'informations et posez nous vos questions.</p>

      <div className="flex">
        <form onSubmit={handleSubmit}>
          <div className='flex'>
            <label htmlFor="email">Adresse Mail :</label>
            <input autoComplete='off' required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className='flex' style={{ marginTop: '24px' }}>
            <label htmlFor="message">Ton message :</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>


          <button type="submit" disabled={state.submitting} className='submit'>Envoyer</button>
        </form>
      </div>
    </section>
  )
}

export default Contact