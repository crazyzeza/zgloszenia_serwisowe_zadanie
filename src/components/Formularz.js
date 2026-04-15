import { useState } from 'react'

function Formularz({ onAddSubmission }) {
  const [formClient, setFormClient] = useState("")
  const [formDevice, setFormDevice] = useState("")
  const [formIssue, setFormIssue] = useState("")
  const [formStatus, setFormStatus] = useState("")
  const [formPriority, setFormPriority] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  function handleSubmit() {
    if (!formClient || !formDevice || !formIssue || !formStatus || !formPriority) {
      setErrorMessage("Wypełnij wszystkie pola formularza!")
      return
    }
    setErrorMessage("")
    onAddSubmission({
      klient: formClient,
      urzadzenie: formDevice,
      usterka: formIssue,
      status: formStatus,
      priorytet: formPriority
    })
    // Wyczyść formularz po dodaniu
    setFormClient("")
    setFormDevice("")
    setFormIssue("")
    setFormStatus("")
    setFormPriority("")
  }

  return (
    <div className="card mb-4">
      <div className="card-header">Dodaj nowe zgłoszenie</div>
      <div className="card-body">
        <div className="mb-3">
          <label htmlFor="klient" className="form-label">Klient</label>
          <input 
            type="text" 
            id="klient" 
            className="form-control" 
            value={formClient} 
            onChange={(e) => setFormClient(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="urzadzenie" className="form-label">Urządzenie</label>
          <input 
            type="text" 
            id="urzadzenie" 
            className="form-control" 
            value={formDevice} 
            onChange={(e) => setFormDevice(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="usterka" className="form-label">Usterka</label>
          <input 
            type="text" 
            id="usterka" 
            className="form-control" 
            value={formIssue} 
            onChange={(e) => setFormIssue(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="status" className="form-label">Status</label>
          <select 
            id="status" 
            className="form-select" 
            value={formStatus} 
            onChange={(e) => setFormStatus(e.target.value)}
          >
            <option value="">Wybierz status</option>
            <option value="nowe">Nowe</option>
            <option value="w trakcie">W trakcie</option>
            <option value="zakończone">Zakończone</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="priorytet" className="form-label">Priorytet</label>
          <select 
            id="priorytet" 
            className="form-select" 
            value={formPriority} 
            onChange={(e) => setFormPriority(e.target.value)}
          >
            <option value="">Wybierz priorytet</option>
            <option value="niski">Niski</option>
            <option value="średni">Średni</option>
            <option value="wysoki">Wysoki</option>
          </select>
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>Dodaj zgłoszenie</button>
        {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
      </div>
    </div>
  )
}

export default Formularz
