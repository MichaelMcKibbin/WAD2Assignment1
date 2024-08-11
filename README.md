# WAD2 - Assignment 1 - React Movies App

## Name: [Michael McKibbin]

This assignment is an extension of the [react-movie-labs](https://github.com/MichaelMcKibbin/react-movie-labs.git) and used the completed week 7 lab as the starting point.

## Overview.

This repo contains the code for **Assignment 1** for the **Web App Development 2** module.

## Existing pages & features

HomePage - <br>
Movie Details Page - <br>
Movie Reviews Page - Display existing reviews from the database.<br>
Add Movie Review Page - Add a review. <br>
Favorite Movies Page - Tag movies as favorites (US spelling to match react)<br>
Playlist Movies Page (My Playlist) - Add movies to a 'must watch' list<br>
Upcoming Movies Page - Movies coming soon.<br>
<br>
<br>
Uses react query<br>

### Added Features.

[ A bullet-point list of the __new features__ you added to the Movies Fan app (and any modifications to existing features) .]

- Feature 1
- Feature 2
- Feature 3
- etc
- Added Firebase Authentication<br>

## Additional Sources & Tutorials

### Firebase<br>

[Add Firebase to your JavaScript project](https://firebase.google.com/docs/web/setup#add-sdk-and-initialize)<br>
[Firebase tutorial](https://console.firebase.google.com/u/0/project/wad2-assignment-1/authentication)<br>
[Demo App](https://console.firebase.google.com/u/0/project/fir-demo-project/overview)<br>
[Youtube instruction video](https://www.youtube.com/watch?v=p9pgI3Mg-So&t=24s)<br>
[Further help](https://github.com/machadop1407/react-firebase-authentication/tree/main)
<br>
[Free Code Camp](https://www.freecodecamp.org/news/use-firebase-authentication-in-a-react-app/)<br>

## Setup requirements.

[ Outline any non-standard setup steps necessary to run your app locally after cloning the repo.]

### Created script (moviescript.sh) to automate initialisation and starting the app.

- npm install
- npm install uuid --save
- npm install @mui/material @emotion/react @emotion/styled @mui/icons-material --save
- npm run storybook
- npm install react-router-dom
- npm install --save react-query
- npm install react-hook-form --save
- npm install firebase
- npm install styled-components
- npm start

## API endpoints.

[ List the __additional__ TMDB endpoints used, giving the description and pathname for each one.]

e.g.

- Discover list of movies - discover/movie
- Movie details - movie/:id
- Movie genres = /genre/movie/list

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

- /blogs - displays all published blogs.
- /blogs/:id - displays a particular blog.
- /blogs/:id/comments - detail view of a particular blog and its comments.
- etc.

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

Itemize the technologies/techniques you researched independently and adopted in your project,
i.e. aspects not covered in the lectures/labs. Include the source code filenames that illustrate these
(we do not require code excerpts) and provide references to the online resources that helped you (articles/blogs).

---

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
