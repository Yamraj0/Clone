import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')

    const formSubmit = (elem) => {
      elem.preventDefault()
        console.log('form submitted by ', title);

        settitle('')
        
    }

  return (
    <div>
      <form onSubmit={formSubmit}> 
        <input type="text" value={title} onChange={(e)=> {
          settitle(e.target.value)
          
        }} placeholder='Enter Your Name'/>
        <button>Submit</button>
      </form>

    </div>
  )
}

export default App