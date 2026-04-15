function Filtr({ onFilterChange }) {
  function filterList(e) {
    onFilterChange(e.target.value)
  }

  return (
    <div className="mb-4">
      <h5>Filtruj:</h5>
      <button className="btn btn-outline-primary me-2" value="nowe" onClick={filterList}>Nowe</button>
      <button className="btn btn-outline-warning me-2" value="w trakcie" onClick={filterList}>W trakcie</button>
      <button className="btn btn-outline-success me-2" value="zakończone" onClick={filterList}>Zakończone</button>
      <button className="btn btn-outline-secondary" value="" onClick={filterList}>Wszystkie</button>
    </div>
  )
}

export default Filtr
