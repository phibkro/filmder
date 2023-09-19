# Filmder

## Project description

Filmder is a website for browsing and saving your favorite movies.
It is a project by uni students studying informatics.
It utilizes modern web technologies like React, TypeScript, Vite, Vitest and TanStack query.

## Testing

We applied multiple methods for testing. For testing

## Roadmap

- ~~Carousel to quickly flip through currently popular movies~~
- Favorite list to scroll through your favorite movies
- Detailed movie page to read about your selected movie
- ~~Togglable light/dark mode switch~~

# Prosjektbeskrivelse

## Tema for prosjektet

Overordent tema for denne oppgaven er at dere skal hente ressurser (eller informasjon om noe) med et eksisterende REST API og lage en presentasjon av dette som en bruker kan bla i og gjøre enkelte valg i. Hvilken tjeneste dere henter fra og hva dere henter er opp til dere, men noen forslag kan være:

- Værvarsling for de største byene
- Dikt av en spesifikk dikter
- Sangtekster av en artist
- Genererte bilder basert på et sett kriterier etc.
- Informasjon om GitHub repo

Dette er alle eksempler som det er å google seg frem til åpne og dokumenterte REST API’er for. Hent inn et fornuftig antall ressurser, og det er ikke nødvendig å lage noen avansert løsning for å bestemme utvalget som hentes. Dette kan være hardkodet eller basert på enkle valg som gjøres av en bruker.

Oppgaven er laget med tanke på at den skal fungere greit som showcase for funksjonelle og tekniske krav og det er greit å gå for enkle løsninger så lenge det innebærer at dere løser de forskjellige kravene som stilles.

Siden dette prosjektet handler om å lære grunnleggende React, skal alle komponenter være egenutviklet og ikke benytte tredjepartskomponenter for UI.

## Funksjonelle krav:

- Brukeren skal få presentert en og en ressurs om gangen, men enkel mulighet til å bla seg frem og tilbake, og med mulighet til å hoppe til en spesifikk ressurs (f.eks. ved å velge i en liste).
- En bruker skal kunne gjøre et valg som påvirker utvalget av det som presenteres og hvordan det presenteres. Disse valgene skal huskes selv om siden reloades.
- ~~En bruker skal kunne velge favoritter ved å for eksempel klikke på en stjerne eller et hjerte. Valg skal huskes selv om nettleser avsluttes og startes igjen.~~
- Siden skal ha responsivt design og være utformet med tanke på både vanlig desktop skjerm og mobil enhet (tilpasse seg mindre skjerm som kan være både i høyde og breddeformat).
- Siden skal ha en estetisk og ryddig utforming (dette er subjektivt, men vi er ute etter at dere skal ha lagt ned litt arbeid i stiling av siden).

## Tekniske krav:

- ~~Løsningen er basert på Typescript og React~~
- ~~Viser bruk av React state og props~~
- ~~Løsningen henter data/informasjon fra et REST API og bruker TanStack Query~~
- ~~Bruker HTML Web storage api localstorage eller webstorage, alternativt kan dere også bruke IndexedDB API’et.~~
- ~~Bruker React Router~~
- Løsningen har responsivt design

## Utvikling og testing

- ~~Bruk av Node.js v20.5+ og npm v9.8+~~
- ~~React prosjekt satt opp med Vite 4.4+, bruk npm create vite@latest, velg prosjekttypen for React -> Typescript~~
- ~~Bruk av git og kildekoden på gitlab.stud.ntnu.no,~~
- ~~bruk av branching og issues for å styre utviklingsoppgaver og lenke commits og merge til issues.~~
- ~~Bruk av linting og prettify~~
- Oppsett og komme i gang med testing:
  - ~~Bruk av Vitest~~
  - Vise snapshot test
  - Testing av egne komponent (teste på prop og state, brukerinteraksjon).
  - Bruk av mocking så testene ikke henter data
  - Applikasjonen skal være testet på mainstream weblesere og mobile enheter (selvsagt kun basert på det gruppa har tilgjengelig av enheter)
  - Dokumentasjon i form av readme på gitlab som dokumenterer og forklarer valg, dokumenterer hva som er testet

## Levering

- Koden levere som den er på gitlab
- Applikasjonen installert under Apache på gruppas virtuelle maskin

### Vurderingskriterier for første innlevering (teller 10%)

- Løsningen skal svare på alle funksjonelle og tekniske krav, samt det som er beskrevet under utvikling og testing.
- Websiden skal ikke ha åpenbare feil som lett oppdages manuelt ved bruk
- Ingen feilmeldinger eller advarsler ved linting, testing eller kjøring
- Ingen unødvendige kall til REST API’et

### Vurderingskriterier ved sluttvurdering (teller 5%)

- Her vurderer vi sluttresultatet uavhengig av om det er jobbet videre med det eller ikke
- Hvis det er vesentlige mangler og kritikk til første innlevering er adressert og løst
- Hvor godt løsning og dokumentasjon viser kunnskap og erfaring
- Dokumentasjonen skal beskrive hva som evt. er forbedret og jobbet med siden første innlevering
