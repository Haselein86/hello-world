import { useState } from 'react'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'

const App = () => {

  const [name, setName] = useState("Haselein")
  const [age, setAge] = useState(90)

  // Estilos
  const [bg, setBg] = useState('#FF0000')


  const [list, setList] = useState([
    "O rato roue a roupa deo rei de roma",
    "Segunda Frase"
  ])


  const handle20 = () => {
    setAge(20)
    setBg("#00FF00")
  }

  const handle90 = () => {
    setAge(90)
    setBg("#FF0000")
  }

  return (
    <div style={{ backgroundColor: bg }}>

      <Header name={name} age={age} />

      {age === 90 &&
        <button onClick={handle20}>Tenho 20 anos</button>
      }
      

      {age === 20 &&
        <button onClick={handle90}>Tenho 90 anos</button>
      }

      <hr />

      <ul>
        {list.map((frase, index) => (
          <li>key={index} {frase}</li>
        ))}

      </ul>


      <Footer />

    </div>
  )
}

export default App