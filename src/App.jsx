import { useState, useEffect, useRef } from 'react'
import Form1 from './components/Form1'
import Form2 from './components/Form2'
import Form3 from './components/Form3'
import Form4 from './components/Form4'
import NumberRow from './components/NumberRow'
import './App.css'
import FormHeader from './components/FormHeader'
import Thanks from './components/Thanks'

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

    const handleNumber =(foward=true) =>{
      foward ? setNumber(number + 1) : setNumber(number - 1)
    }
  return (
    <div className="App">
      <NumberRow number={number} setNumber={setNumber} />
      <main className="container">
        <div className="conteiner__form" ref={formContainerRef}>
        <FormHeader number={number}/>
        {number === 1 && <Form1 setFullform={setFullform} handleNumber={handleNumber} fullForm={fullForm}/>}
        {number === 2 && <Form2 setFullform={setFullform} handleNumber={handleNumber} fullForm={fullForm}/>}
        {number === 3 && <Form3 setFullform={setFullform} handleNumber={handleNumber} fullForm={fullForm}/>}
        {number === 4 && <Form4 fullForm={fullForm} setFullform={setFullform} handleNumber={handleNumber}/>}
        {number === 5 && <Thanks />}
        </div>
      </main>

    </div>
  )
}

export default App
