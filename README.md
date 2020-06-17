# Enties
This is a React Frontend web project for enties and movie geeks using REST API provided by [The Movie Database](http://themoviedb.org).<br/>
The features and functionalities of `Enties` include search, movie listing, pricing idea, movie reviews, official credits, official YouTube trailers, similar items and TMDB's very own recommendation system. I also try to make UI/UX attractive. Please take a look at [http://enties.netlify.app](http://enties.netlify.app).<br/><br/>

*Disclaimer: Also note that the commercial idea on the aforementioned website by this project is totally for demo purpose only. Moreover, this project is under development and some expected featues might not be available by the time you view it. But, if you have crazy new innovative idea, let me know, shoot me a DM at [http://linkedin.com/in/thesaihan](http://linkedin.com/in/thesaihan)*<br/>

## Configurations

Before you run this project, sign up and get your own `Access Token (v4 auth)` from TMDB. For convenience, create environment variable file named `.env` and paste the following like so:<br/><br/>
`REACT_APP_API_END_POINT=https://api.themoviedb.org/3`<br/>
`REACT_APP_ACCESS_TOKEN=<YOUR_TMDB_ACESS_TOKEN>`<br/>
`REACT_APP_POSTER_PATH=https://image.tmdb.org/t/p/w500`<br/><br/>

## Available Scripts

In the project directory, you can run:

### `npm install`
To install the required dependencies.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
