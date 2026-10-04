import Counter from './Counter'
import './App.css'
import Batsman from './Batsman'

import Boller from './Boller'

function App() {
 function handleClick() {
  alert('Button clicked!')
 }

 return (
    <>
   <h1>Vite + React</h1>
   <button onClick={handleClick}>Click Me</button>
   <button onClick={() => alert('Button 2 clicked!')}>Click Me</button>
    <Counter></Counter>
    <Batsman></Batsman>
    <Boller></Boller>
    </>
  )
}

export default App
