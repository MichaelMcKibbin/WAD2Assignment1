# WAD2 - Assignment 1 - React Movies App

## Name: [Michael McKibbin]

This assignment is an extension of the [react-movie-labs](https://github.com/MichaelMcKibbin/react-movie-labs.git) and used the completed week 7 lab as the starting point.

## Overview.

This repo contains the code for **Assignment 1** for the **Web App Development 2** module.

![image] ()

## Existing pages & features

HomePage - Discover movies list.<br>
Movie Details Page - Poster images, Overview, Genre, Production Countries, and some other details.<br>
Movie Reviews Page - Display existing reviews from the TMDB database.<br>
Add Movie Review Page - Add a review. Linked from button on movie cards. <br>
Favorite Movies Page - Tag movies as favorites (US spelling to match react)<br>
Upcoming Movies Page - Movies coming soon.<br>
<br>
<br>
Uses react query<br>

### Added Features.

- Latest Movie Page - Shows one movie selected by TMDB
- Playlist Movies Page (My Playlist) - Add movies to a 'My Playlist' list<br>
  Similar to the Favorites list.
- Cast (of current movie). Opens in new window. Links from button on movie details page.
  Lists actors in movie. Links to Actors biography page.
- Biography page (per actor).
  Links to movies actor has appeared in, actors credits, and actors IMDB page which opens in a new window.
- Pagination, (some)
- Similar Movies - linked from button on movie details page.

- etc
- Added Firebase Authentication - A sign up / login feature<br>

## Additional Sources & Tutorials / Independent learning

### Firebase<br>

[Add Firebase to your JavaScript project](https://firebase.google.com/docs/web/setup#add-sdk-and-initialize)<br>
[Firebase tutorial](https://console.firebase.google.com/u/0/project/wad2-assignment-1/authentication)<br>
[Demo App](https://console.firebase.google.com/u/0/project/fir-demo-project/overview)<br>
[Youtube instruction video](https://www.youtube.com/watch?v=p9pgI3Mg-So&t=24s)<br>
[Further help](https://github.com/machadop1407/react-firebase-authentication/tree/main)
<br>
[Free Code Camp](https://www.freecodecamp.org/news/use-firebase-authentication-in-a-react-app/)<br>

## Setup requirements.

sign up & login to TMDB to get an API key and insert it into the .env file in the project's root folder.
Do the same with Firebase key

- .env file
  REACT_APP_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
  FIREBASE_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

Commands used to initialise and start app.

- npm
- storybook
- @mui/material
- @emotion/react
- @emotion/styled
- @mui/icons-material
- react-router-dom
- react-query
- firebase
- styled-components
- react-scripts

### Installation script

Added script (moviescript.sh) to automate first initialisation and start up.

## API endpoints & routing.

- /reviews/:id - Movie Review Page
- /movies/favorites Favorite Movies Page
- /movies/playlist - Playlist Movies Page
- /movies/upcoming - Upcoming Movies Page
- /latest - Latest Movies Page
- /reviews/form - Add Movie Review Page
- /movies/toprated - Top Rated Movies Page
- /movies/popular - Popular Movies Page
- /reviews/:id - Movie Review Page
- /movies/similar/:id Similar Movies Page
- /actors/credits/:id - Movie Actors Page
- /actors/:id - Actors Details Page
- /actors/:id/actors-movies/ Actors Movie Credits Page
- /movies/:id - Movie Page
- /authentication - Log in Or Signup Page

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
