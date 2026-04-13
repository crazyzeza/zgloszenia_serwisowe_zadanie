import { useState } from 'react'

import './App.css'

function App() {
  const [formClient, setFormClient] = useState("")
  const [formDevice, setFormDevice] = useState("")
  const [formIssue, setFormIssue] = useState("")
  const [formStatus, setFormStatus] = useState("")
  const [formPriority, setFormPriority] = useState("")

  const [submissions, setSubmissions] = useState([])

  const [statusToFilterBy, setStatusToFilterBy] = useState("")
  function SubmissionsList(props) {
    let list = submissions;
    if (statusToFilterBy !== "") {
      list = submissions.filter((submission) => submission.status === statusToFilterBy);
    }

    if (list.length == 0) {
      return <div className="empty-message">Brak zgłoszeń do wyświetlenia</div>;
    }
    return list.map((submission) => (
      <div key={submission.id} className="submission-item">
        <p><strong>Klient:</strong> {submission.klient} | <strong>Urządzenie:</strong> {submission.urzadzenie} | <strong>Usterka:</strong> {submission.usterka} | <strong>Status:</strong> {submission.status} | <strong>Priorytet:</strong> {submission.priorytet}</p>
      </div>
    ));
  }
  function AddNewSubmission(){
    setSubmissions([
      ...submissions, {
        id:submissions.length,
        klient:formClient,
        urzadzenie:formDevice,
        usterka:formIssue,
        status:formStatus,
        priorytet:formPriority
      }
    ])
  }
  function filterList(e){
    setStatusToFilterBy(e.target.value);
  }
  function SubmissionCounter(props) {
    const count = submissions.filter((submission) => submission.status === props.status).length;
    return <div className="summary-item"><p>{props.status}: {count}</p></div>
  }
  
  // Generowanie losowych gwiazdek
  const starEmojis = ['⭐', '✨', '🌟', '💫', '⚡'];
  const stars = Array.from({length: 35}, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 5,
    size: 15 + Math.random() * 25,
    emoji: starEmojis[Math.floor(Math.random() * starEmojis.length)]
  }));

  return (
    <>
      <div className="stars">
        {stars.map(star => (
          <span 
            key={star.id} 
            className="star" 
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              animationDelay: `${star.delay}s`,
              fontSize: `${star.size}px`
            }}
          >{star.emoji}</span>
        ))}
      </div>
      <div className="app-container">
        <h1 className="app-title">✨ System Zgłoszeń ✨</h1>
        
        <div className="glass-card">
          <div className="card-title">Dodaj nowe zgłoszenie</div>
          <div className="mb-3">
            <label className="form-label">Klient</label>
            <input type="text" className="form-control" value={formClient} onChange={(e) => setFormClient(e.target.value)} placeholder="Wpisz nazwę klienta..." />
          </div>
          <div className="mb-3">
            <label className="form-label">Urządzenie</label>
            <input type="text" className="form-control" value={formDevice} onChange={(e) => setFormDevice(e.target.value)} placeholder="Wpisz urządzenie..." />
          </div>
          <div className="mb-3">
            <label className="form-label">Usterka</label>
            <input type="text" className="form-control" value={formIssue} onChange={(e) => setFormIssue(e.target.value)} placeholder="Opisz usterkę..." />
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
          <button className="btn-magic" onClick={AddNewSubmission}>Dodaj zgłoszenie</button>
        </div>

        <div className="glass-card">
          <div className="card-title">Filtruj zgłoszenia</div>
          <div className="filter-section">
            <button className="filter-btn new" value={"Nowe"} onClick={filterList}>🌱 Nowe</button>
            <button className="filter-btn in-progress" value={"W trakcie"} onClick={filterList}>⚡ W trakcie</button>
            <button className="filter-btn done" value={"Zakończone"} onClick={filterList}>✅ Zakończone</button>
            <button className="filter-btn all" value={""} onClick={filterList}>🌈 Wszystkie</button>
          </div>
        </div>

        <div className="glass-card">
          <div className="card-title">Lista zgłoszeń</div>
          <SubmissionsList></SubmissionsList>
        </div>

        <div className="glass-card">
          <div className="card-title">Podsumowanie</div>
          <div className="summary-grid">
            <SubmissionCounter status="Nowe"></SubmissionCounter>
            <SubmissionCounter status="W trakcie"></SubmissionCounter>
            <SubmissionCounter status="Zakończone"></SubmissionCounter>
          </div>
        </div>
      </div>
    </>
  )
}

export default App