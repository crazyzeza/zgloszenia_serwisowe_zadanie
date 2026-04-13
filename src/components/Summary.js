export default function Summary({ zgloszenia }) {
    const nowe = zgloszenia.filter(z => z.status === "nowe").length;
    const wtrakcie = zgloszenia.filter(z => z.status === "w trakcie").length;
    const zakonczone = zgloszenia.filter(z => z.status === "zakończone").length;
  
    return (
      <div>
        <p>Wszystkie: {zgloszenia.length}</p>
        <p>Nowe: {nowe}</p>
        <p>W trakcie: {wtrakcie}</p>
        <p>Zakończone: {zakonczone}</p>
      </div>
    );
  }