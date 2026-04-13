export default function ZgloszenieItem({ z }) {
    return (
      <div className="card">
        <h3>{z.klient}</h3>
        <p><b>Urządzenie:</b> {z.urzadzenie}</p>
        <p><b>Usterka:</b> {z.usterka}</p>
        <p><b>Status:</b> {z.status}</p>
        <p><b>Priorytet:</b> {z.priorytet}</p>
      </div>
    );
  }