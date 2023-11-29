# Filmder

## Project description

Filmder is a website for browsing and saving your favorite movies.
It is a project by uni students studying informatics.

Filmder is a website for matching you with the currently hottest movies. By browsing our movieselection, you will find movies that you will love. When you find a movie that you want to watch later, you can add it to your favourites by clicking on the favourite icon. Then the movie will be saved in your favorite list. To see your favorite movies or hide them from the selection you can select your prefered filter in the dropdown bar. When you have seen the movie, you can then remove it from this list by clicking on the favorite icon again so that the star are no longer black. If you find a movie that you think you might love, but is on the fence of whether to match with it or not, you can always click the movie to get a quick overview of what it is about and how well liked it is.

This is all done by utilizing modern web technologies like React, TypeScript, Vite, Vitest and TanStack query.

## How to use this project

1. Clone the repo
2. Install the dependencies with `npm install`
3. Rename .env.example to .env and add your own theMovieDB authentication token to VITE_API_READ_ACCESS_TOKEN
4. To play with the code yourself you can `npm run dev` to start a dev environment and `npm test` to check tests (with coverage)
5. or you could `npm build` and deploy your own instance of the project

## Testing

We set up the testing environment for the project and created tests for what we thought was relevant to test. While not all tests are completely done yet, we still managed to finish many. We finished snapshot tests for all components. Because the movie overview page depend on data fetched from themoviedb we created mock data in order to not fetch data from the database. As of now most of our components rely on data as props to render and therefore when we test if the component renders we also test the prop. We also have tests for custom hooks and states.

## Our choices

Originally we were supposed to have a list of favorited movies. Instead we decided to have a dropdown menu to filter the movies below the movie carousel. This way, the users choice wil influence how and which movies are presented.

We added an overview page for a chosen movie, so that the user will be able to get specific information about said movie. This is implemented by the user clicking on a movie either in the carousel or the movielist below in the homepage.

We implemented system where you click on the star under the movie in order to favorite it. We decided to use localStorage for remembering what movies the user favorited, so the user can close and re-open their webbrowser without losing their favorite movies. This also applies to darkmode and the filtering option. Sessionstorage is therefore not relevant to this project because we wanted the page to remember the users choices after closing and reopening the webbrowser.

In order to support mobile devices and standard computer screens we chose to apply a responsive design using media queries and flexbox. This is because most users will access our website through their phones or computers.

## Project- / File structure

### Explanations in the same form as the project structure

- Root of the project contains configuration files for the whole project
- `index.html` configure metadata here
  - is technically the main entry point for the application
- `public/` contains public assets
- `src/` contains all code for the application
  - `components/` contains components with more complicated logic
    - `ui/` contains reusable ui components like buttons and cards
  - `features/` contains functionality that can't be quite categorized as components, such as themeProvider
  - `hooks/` contains custom hooks
  - `layouts/` contains layout components reused by multiple pages
  - `mock-data/` contains mock data
  - `pages/` define separate pages in the application
    - Importantly have the responsibility of data handling and conditional rendering
  - `server/` contains code relating to data fetching
  - `styles/` contains styling for all components, layouts & pages
  - `utils/` contains different utilities
    - Basically "etc." but for code reused throughout the application
  - `main.tsx` is the main entry point for our application
    - Here providers, routing and styles are added to the application
  - `router.tsx` is where we define our routing
