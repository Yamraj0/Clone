import React, { useState } from 'react'

const App = () => {

     const [num, setnum] = useState(1)

function increaseNum(){
setnum(num+1)
}


function decreaseNUM()
{
setnum(num-1)

}
function resetNum(){
setnum(0)
}

return (
    <div>
      <h2>{num}</h2>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNUM}>Decrease</button>
      <button onClick={resetNum}>Reset</button>
    </div>
  )
}

export default App