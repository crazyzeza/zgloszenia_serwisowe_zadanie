import { useState } from "react";

export default function AddZgloszenieForm({ addZgloszenie }) {
  const [form, setForm] = useState({
    klient: "",
    urzadzenie: "",
    usterka: "",
    status: "nowe",
    priorytet: "niski"
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.klient || !form.urzadzenie || !form.usterka) {
      setError("Wypełnij wymagane pola!");
      return;
    }

    const nowe = {
      ...form,
      id: Date.now()
    };

    addZgloszenie(nowe);
    setForm({
      klient: "",
      urzadzenie: "",
      usterka: "",
      status: "nowe",
      priorytet: "niski"
    });
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Dodaj zgłoszenie</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        placeholder="Klient"
        value={form.klient}
        onChange={e => setForm({...form, klient: e.target.value})}
      />
      <input
        placeholder="Urządzenie"
        value={form.urzadzenie}
        onChange={e => setForm({...form, urzadzenie: e.target.value})}
      />
      <input
        placeholder="Usterka"
        value={form.usterka}
        onChange={e => setForm({...form, usterka: e.target.value})}
      />

      <select onChange={e => setForm({...form, status: e.target.value})}>
        <option value="nowe">nowe</option>
        <option value="w trakcie">w trakcie</option>
        <option value="zakończone">zakończone</option>
      </select>

      <select onChange={e => setForm({...form, priorytet: e.target.value})}>
        <option value="niski">niski</option>
        <option value="średni">średni</option>
        <option value="wysoki">wysoki</option>
      </select>

      <button type="submit">Dodaj</button>
    </form>
  );
}