import { useState, useEffect } from 'react'
import './App.css'
import Form1 from './components/Form1'

function App() {
  const [fullForm, setFullform] = useState({name:"",email:"",phone:""})

  useEffect(() => {
    console.log(fullForm)
  }, [fullForm])
  return (
    <div className="App">
      <Form1 setFullform={setFullform}/>
    </div>
  )
}

export default App
