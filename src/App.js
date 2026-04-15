import { useState, useEffect } from 'react'

import './App.css'
import Naglowek from './components/Naglowek'
import Formularz from './components/Formularz'
import Filtr from './components/Filtr'
import ListaZgloszen from './components/ListaZgloszen'
import Podsumowanie from './components/Podsumowanie'

function App() {
  const [submissions, setSubmissions] = useState([])
  const [statusToFilterBy, setStatusToFilterBy] = useState("")

  useEffect(() => {
    fetch('/zgloszenia.json')
      .then(response => response.json())
      .then(data => setSubmissions(data))
      .catch(error => console.error('Błąd ładowania zgłoszeń:', error))
  }, [])

  function handleAddSubmission(newSubmission) {
    const maxId = submissions.length > 0 
      ? Math.max(...submissions.map(s => s.id)) 
      : 0
    setSubmissions([
      ...submissions,
      {
        id: maxId + 1,
        ...newSubmission
      }
    ])
  }

  function handleFilterChange(status) {
    setStatusToFilterBy(status)
  }

  return (
    <div className="container mt-4">
      <Naglowek />
      <Formularz onAddSubmission={handleAddSubmission} />
      <Filtr onFilterChange={handleFilterChange} />
      <ListaZgloszen submissions={submissions} statusToFilterBy={statusToFilterBy} />
      <Podsumowanie submissions={submissions} />
    </div>
  )
}

export default App
