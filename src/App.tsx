import { useState } from 'react'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'


const App = () => {

  const [name, setName] = useState("Haselein")
  const [age, setAge] = useState(90)

  // Estilos
  const [bg, setBg] = useState('#FF0000')


  // const handleClick = () => {
  //   setBg('#0000FF')
  // }


  const handle20 = () => {
    setAge(20)
  }

  const handle90 = () => {
    setAge(90)
  }

  return (
    <div style={{ backgroundColor: bg }}>

      <Header name={name} age={age} />

      <button onClick={handle20}>Tenho 20 anos</button>
      <button onClick={handle90}>Tenho 90 anos</button>

      <Footer />

    </div>
  )
}

export default App