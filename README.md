Autorzy: Zuzanna Dróżdż, Miłosz Karpeta, Franciszek Kłykociński, Ignacy Guminiak
 
Opis projektu:
Projekt to aplikacja webowa napisana w React, służąca do obsługi zgłoszeń serwisowych.
Użytkownik może dodawać nowe zgłoszenia, przeglądać je oraz filtrować według statusu.
 
Aplikacja działa w przeglądarce i wykorzystuje komponenty React oraz hooki (useState) do zarządzania stanem.
 
Funkcjonalności:
 
Dodawanie nowego zgłoszenia (klient, urządzenie, usterka, status, priorytet)
Wyświetlanie listy zgłoszeń
Filtrowanie zgłoszeń po statusie
Liczenie zgłoszeń według statusu
Prosty interfejs oparty na Bootstrap
 
Struktura projektu:
 
src/App.js – główny komponent aplikacji (logika i widok)
src/index.js – punkt startowy aplikacji
public/index.html – główny plik HTML
public/zgloszenia.json – przykładowe dane (jeśli używane)
package.json – konfiguracja projektu i zależności
 
Wymagania:
 
Node.js (zalecana wersja 18 lub nowsza)
npm (instalowany razem z Node.js)
 
Użyte technologie:
 
React
JavaScript (ES6)
Bootstrap 5
HTML / CSS
 
Jak uruchomić program:
 
Rozpakuj projekt.
Otwórz terminal w folderze projektu.
 
Zainstaluj zależności:
 
npm install
 
Uruchom aplikację:
 
npm start
 
Otwórz przeglądarkę i przejdź do:
 
http://localhost:3000
 
Uwagi:
 
Dane zgłoszeń są przechowywane tylko w pamięci aplikacji (po odświeżeniu strony znikają)
Aplikacja ma charakter demonstracyjny i nie wykorzystuje bazy danych
Projekt został utworzony przy użyciu Create React App

DOKUMENTACJA:
Komponent SubmissionList:
Przyjmuje listę zgłoszeń i status, po którym chcemy filtrować, w props. Następuje filtrowanie, a następnie przefiltrowana lista jest mapowana i wyświetlana.
Test submissionList.test:
Tworzy nowe wystąpienie komponentu SubmissionsList z przykładowymi danymi. Testy sprawdzają listę (wynik mapowania) po filtrowaniu według danego statusu.
