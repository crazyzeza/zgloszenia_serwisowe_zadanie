# System Zgłoszeń Serwisowych

Aplikacja webowa do zarządzania zgłoszeniami serwisowymi, stworzona w React.js z wykorzystaniem Bootstrap 5.

## Spis treści
- [Opis projektu](#opis-projektu)
- [Technologie](#technologie)
- [Struktura projektu](#struktura-projektu)
- [Instalacja i uruchomienie](#instalacja-i-uruchomienie)
- [Funkcjonalności](#funkcjonalności)
- [Format danych](#format-danych)
- [Komponenty](#komponenty)

## Opis projektu

System Zgłoszeń Serwisowych to aplikacja typu SPA (Single Page Application) umożliwiająca:
- Rejestrowanie nowych zgłoszeń serwisowych
- Przeglądanie listy zgłoszeń
- Filtrowanie zgłoszeń według statusu
- Podgląd statystyk zgłoszeń

## Technologie

| Technologia | Wersja | Opis |
|-------------|--------|------|
| React | 19.2.4 | Biblioteka do budowy interfejsu użytkownika |
| Bootstrap | 5.3.8 | Framework CSS do stylizacji |
| Create React App | 5.0.1 | Narzędzie do tworzenia aplikacji React |

## Struktura projektu

```
my-app/
├── public/
│   ├── index.html          # Główny plik HTML
│   ├── zgloszenia.json     # Dane początkowe zgłoszeń
│   └── manifest.json       # Konfiguracja PWA
├── src/
│   ├── App.js              # Główny komponent aplikacji
│   ├── App.css             # Style aplikacji
│   ├── index.js            # Punkt wejścia aplikacji
│   └── index.css           # Globalne style
└── package.json            # Zależności i skrypty
```

## Instalacja i uruchomienie

### Wymagania
- Node.js (wersja 14 lub nowsza)
- npm (menedżer pakietów)

### Instalacja

```bash
# Sklonuj repozytorium
git clone <url-repozytorium>

# Przejdź do katalogu projektu
cd my-app

# Zainstaluj zależności
npm install
```

### Uruchomienie

```bash
# Tryb deweloperski (z hot reload)
npm start
```

Aplikacja będzie dostępna pod adresem: **http://localhost:3000**

### Budowanie produkcyjne

```bash
npm run build
```

Zoptymalizowana wersja zostanie utworzona w katalogu `build/`.

### Testy

```bash
npm test
```

## Funkcjonalności

### 1. Dodawanie nowego zgłoszenia

Formularz zawiera następujące pola:

| Pole | Typ | Wymagane | Opis |
|------|-----|----------|------|
| Klient | Tekst | Tak | Imię i nazwisko lub nazwa klienta |
| Urządzenie | Tekst | Tak | Typ/model urządzenia |
| Usterka | Tekst | Tak | Opis problemu |
| Status | Lista wyboru | Tak | Nowe / W trakcie / Zakończone |
| Priorytet | Lista wyboru | Tak | Niski / Średni / Wysoki |

**Walidacja:** Wszystkie pola są wymagane. Przy próbie dodania zgłoszenia z pustym polem wyświetla się komunikat błędu: *"Wypełnij wszystkie pola formularza!"*

### 2. Lista zgłoszeń

- Automatyczne ładowanie danych z pliku `zgloszenia.json` przy starcie aplikacji
- Wyświetla wszystkie zgłoszenia z pełnymi informacjami
- Przy braku zgłoszeń wyświetla komunikat: *"Brak zgłoszeń do wyświetlenia"*

### 3. Filtrowanie zgłoszeń

Dostępne filtry:

| Przycisk | Kolor | Działanie |
|----------|-------|-----------|
| Nowe | Niebieski | Pokazuje tylko nowe zgłoszenia |
| W trakcie | Żółty | Pokazuje zgłoszenia w realizacji |
| Zakończone | Zielony | Pokazuje zakończone zgłoszenia |
| Wszystkie | Szary | Usuwa filtr, pokazuje wszystkie |

Filtrowanie jest niewrażliwe na wielkość liter (case-insensitive).

### 4. Podsumowanie statystyk

Panel podsumowania pokazuje liczbę zgłoszeń w każdym statusie:
- Nowe: X
- W trakcie: X
- Zakończone: X

## Format danych

### Struktura zgłoszenia (JSON)

```json
{
  "id": 1,
  "klient": "Jan Kowalski",
  "urzadzenie": "Laptop Lenovo",
  "usterka": "Brak obrazu po uruchomieniu",
  "status": "nowe",
  "priorytet": "wysoki"
}
```

### Plik zgloszenia.json

Plik znajduje się w katalogu `public/` i zawiera początkowe dane zgłoszeń ładowane przy uruchomieniu aplikacji.

## Komponenty

### App
Główny komponent aplikacji zawierający całą logikę i interfejs.

**Stan (State):**
- `formClient`, `formDevice`, `formIssue`, `formStatus`, `formPriority` - wartości pól formularza
- `errorMessage` - komunikat błędu walidacji
- `submissions` - tablica zgłoszeń
- `statusToFilterBy` - aktualnie wybrany filtr statusu

### SubmissionsList
Wewnętrzna funkcja renderująca listę zgłoszeń z uwzględnieniem aktualnego filtra.

### SubmissionCounter
Komponent wyświetlający liczbę zgłoszeń dla danego statusu.

## Autor

Projekt stworzony jako zadanie programistyczne.

## Licencja

Projekt udostępniony na licencji MIT.
