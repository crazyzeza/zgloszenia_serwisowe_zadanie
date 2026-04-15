function ListaZgloszen({ submissions, statusToFilterBy }) {
  let list = submissions
  if (statusToFilterBy !== "") {
    list = submissions.filter((submission) => submission.status === statusToFilterBy)
  }

  function getStatusBadgeClass(status) {
    const statusLower = status.toLowerCase()
    if (statusLower === 'nowe') return 'bg-primary'
    if (statusLower === 'w trakcie') return 'bg-warning text-dark'
    if (statusLower === 'zakończone') return 'bg-success'
    return 'bg-secondary'
  }

  function getPriorityBadgeClass(priority) {
    const priorityLower = priority.toLowerCase()
    if (priorityLower === 'wysoki') return 'bg-danger'
    if (priorityLower === 'średni') return 'bg-warning text-dark'
    if (priorityLower === 'niski') return 'bg-info'
    return 'bg-secondary'
  }

  return (
    <div className="card mb-4">
      <div className="card-header">Lista zgłoszeń</div>
      <div className="card-body">
        {list.length === 0 ? (
          <p className="text-muted">Brak zgłoszeń do wyświetlenia</p>
        ) : (
          <div className="row">
            {list.map((submission) => (
              <div key={submission.id} className="col-md-6 col-lg-4 mb-3">
                <div className="card h-100 shadow-sm">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <strong>{submission.klient}</strong>
                    <span className={`badge ${getPriorityBadgeClass(submission.priorytet)}`}>
                      {submission.priorytet}
                    </span>
                  </div>
                  <div className="card-body">
                    <p className="card-text mb-2">
                      <strong>Urządzenie:</strong> {submission.urzadzenie}
                    </p>
                    <p className="card-text mb-2">
                      <strong>Usterka:</strong> {submission.usterka}
                    </p>
                  </div>
                  <div className="card-footer">
                    <span className={`badge ${getStatusBadgeClass(submission.status)}`}>
                      {submission.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default ListaZgloszen
