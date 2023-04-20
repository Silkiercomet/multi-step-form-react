import { useState, useEffect, useRef } from 'react'
import Form1 from './components/Form1'
import Form2 from './components/Form2'
import Form3 from './components/Form3'
import Form4 from './components/Form4'
import NumberRow from './components/NumberRow'
import './App.css'
import FormHeader from './components/FormHeader'

function App() {
  const [fullForm, setFullform] = useState({name:"",email:"",phone:"",billing:{type:"",price:0, plan:""}, addon:[], total:0})
  const [number, setNumber] = useState(1)
  const formContainerRef = useRef(null)

  useEffect(() => {
    formContainerRef.current.classList.add("hidden")
    const timeoutId = setTimeout(() => {
      formContainerRef.current.classList.remove('hidden');
    }, 500);
    return () => clearTimeout(timeoutId)
  }, [number])

  return (
    <div className="App">
      <NumberRow number={number} setNumber={setNumber} />
      <main className="container">
        <div className="conteiner__form" ref={formContainerRef}>
        <FormHeader number={number} />
        {number === 1 && <Form1 setFullform={setFullform}/>}
        {number === 2 && <Form2 setFullform={setFullform}/>}
        {number === 3 && <Form3 setFullform={setFullform}/>}
        {number === 4 && <Form4 fullForm={fullForm} setFullform={setFullform}/>}
        </div>
      </main>

    </div>
  )
}

export default App
