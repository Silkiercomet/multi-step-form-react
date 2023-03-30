import { useState, useEffect } from 'react'
import './App.css'
import Form1 from './components/Form1'
import Form2 from './components/Form2'
import Form3 from './components/Form3'
import Form4 from './components/Form4'


function App() {
  const [fullForm, setFullform] = useState({name:"",email:"",phone:"",billing:{type:"",price:0, plan:""}, addon:[], total:0})

  useEffect(() => {
    console.log(fullForm)
  }, [fullForm])
  return (
    <div className="App">
      <Form1 setFullform={setFullform}/>
      <Form2 setFullform={setFullform}/>
      <Form3 setFullform={setFullform}/>
      <Form4 fullForm={fullForm} />
    </div>
  )
}

export default App
