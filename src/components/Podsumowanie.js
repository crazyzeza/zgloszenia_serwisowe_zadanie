function Podsumowanie({ submissions }) {
  function countByStatus(status) {
    return submissions.filter(
      (submission) => submission.status === status
    ).length
  }

  return (
    <div className="card">
      <div className="card-header">Podsumowanie</div>
      <div className="card-body">
        <p>Nowe: {countByStatus("nowe")}</p>
        <p>W trakcie: {countByStatus("w trakcie")}</p>
        <p>Zakończone: {countByStatus("zakończone")}</p>
      </div>
    </div>
  )
}

export default Podsumowanie
