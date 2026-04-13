export default function Filter({ setFilter }) {
    return (
      <div>
        <button onClick={() => setFilter("wszystkie")}>Wszystkie</button>
        <button onClick={() => setFilter("nowe")}>Nowe</button>
        <button onClick={() => setFilter("w trakcie")}>W trakcie</button>
        <button onClick={() => setFilter("zakończone")}>Zakończone</button>
      </div>
    );
  }