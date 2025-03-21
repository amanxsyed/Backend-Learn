import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {axios.get('/api/jokes')
  .then((response) => {
    setJokes(response.data)

  }
  )
  .catch((error) => {
    console.log("Error fetching jokes", error)
  })
});

  return (
    <>
      <h1>Connecting Frontend With Backend</h1>
      <p>Jokes: {jokes.length}</p>

      {
        jokes.map((joke)=>(
          <div key={joke.id}>
            <h3>{joke.question}</h3>
            <p>{joke.answer}</p>
          </div>

        ))
      }
    </>
  )
}

export default App;
