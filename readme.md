# Lingee

Lingee to aplikacja internetowa do nauki słownictwa w językach obcych. Umożliwia naukę angielskiego, czeskiego, tureckiego i polskiego.

## Uruchomienie

Aplikacja jest hostowana pod adresem https://lingee-app.onrender.com.

Można ją także uruchomić lokalnie wykorzystując dump bazy danych zawarty w folderze `server/testdb`.
Serwer backendowy uruchamia się wykonując polecenia `npm install` i `npm start` w folderze `server`,
natomiast frontend uruchamia się wykonując polecenia `npm install` i `ng serve` w folderze `client`.

Prawidłowe działanie serwera wymaga również odpowiedniego ustawienia zmiennych środowiskowych umożliwiających
m.in. połączenie z bazą danych czy dostęp do zewnętrznego API.