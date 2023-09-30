import React from 'react'

import './SuccessfullForm.css'

const SuccessfulForm = ({text}) => {
  return (
    <section className='successful-form'>
        <h1><i class="fa-solid fa-check"></i> {text}</h1>
    </section>
  )
}

export default SuccessfulForm
