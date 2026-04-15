import { useState } from 'react'

import './App.css'
import Naglowek from './components/Naglowek'
import Formularz from './components/Formularz'
import Filtr from './components/Filtr'
import ListaZgloszen from './components/ListaZgloszen'
import Podsumowanie from './components/Podsumowanie'

function App() {
  const [submissions, setSubmissions] = useState([])
  const [statusToFilterBy, setStatusToFilterBy] = useState("")
  function SubmissionsList(props) {
    let list = submissions;
    if (statusToFilterBy !== "") {
      list = submissions.filter((submission) => submission.status === statusToFilterBy);
    }

    if (list.length == 0) {
      return "Brak zgłoszeń do wyświetlenia";
    }
    return list.map((submission) => (
      <div key={submission.id}>
        <p>Klient: {submission.klient}, Urządzenie: {submission.urzadzenie}, Usterka: {submission.usterka}, Status: {submission.status}, Priorytet: {submission.priorytet}</p>
      </div>
    ));
  }
  function AddNewSubmission(){
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
      <h1 className="mb-4">System Zgłoszeń</h1>
      
      <div className="card mb-4">
        <div className="card-header">Dodaj nowe zgłoszenie</div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Klient</label>
            <input type="text" className="form-control" value={formClient} onChange={(e) => setFormClient(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Urządzenie</label>
            <input type="text" className="form-control" value={formDevice} onChange={(e) => setFormDevice(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Usterka</label>
            <input type="text" className="form-control" value={formIssue} onChange={(e) => setFormIssue(e.target.value)} />
          </div>
          <div className="mb-3">
            <label className="form-label">Status</label>
            <select className="form-select" value={formStatus} onChange={(e) => setFormStatus(e.target.value)}>
              <option value="">Wybierz status</option>
              <option value="Nowe">Nowe</option>
              <option value="W trakcie">W trakcie</option>
              <option value="Zakończone">Zakończone</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Priorytet</label>
            <select className="form-select" value={formPriority} onChange={(e) => setFormPriority(e.target.value)}>
              <option value="">Wybierz priorytet</option>
              <option value="Niski">Niski</option>
              <option value="Średni">Średni</option>
              <option value="Wysoki">Wysoki</option>
            </select>
          </div>
          <button className="btn btn-primary" onClick={AddNewSubmission}>Dodaj zgłoszenie</button>
        </div>
      </div>

      <div className="mb-4">
        <h5>Filtruj:</h5>
        <button className="btn btn-outline-primary me-2" value={"Nowe"} onClick={filterList}>Nowe</button>
        <button className="btn btn-outline-warning me-2" value={"W trakcie"} onClick={filterList}>W trakcie</button>
        <button className="btn btn-outline-success me-2" value={"Zakończone"} onClick={filterList}>Zakończone</button>
        <button className="btn btn-outline-secondary" value={""} onClick={filterList}>Wszystkie</button>
      </div>

      <div className="card mb-4">
        <div className="card-header">Lista zgłoszeń</div>
        <div className="card-body">
          <SubmissionsList></SubmissionsList>
        </div>
      </div>

      <div className="card">
        <div className="card-header">Podsumowanie</div>
        <div className="card-body">
          <SubmissionCounter status="Nowe"></SubmissionCounter>
          <SubmissionCounter status="W trakcie"></SubmissionCounter>
          <SubmissionCounter status="Zakończone"></SubmissionCounter>
        </div>
      </div>
    </div>
  )
}

export default App