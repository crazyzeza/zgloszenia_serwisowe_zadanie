import ZgloszenieItem from "./ZgloszenieItem";

export default function ZgloszeniaList({ zgloszenia }) {
  if (zgloszenia.length === 0) {
    return <p>Brak zgłoszeń do wyświetlenia.</p>;
  }

  return (
    <div>
      {zgloszenia.map(z => (
        <ZgloszenieItem key={z.id} z={z} />
      ))}
    </div>
  );
}