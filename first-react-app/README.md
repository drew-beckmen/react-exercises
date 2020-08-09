# Introduction to React: 

## Exercise: 

React is component-based, and each component should be separated into its own file. Start this exercise by creating an "App.jsx" component in your src/components directory. Then, create a functional component named "App", and define a simple JSX element inside of that component (Hint: start with something obvious, like a `<h1>` element). Then, return that element from the App component.

Try to render your new App component from index.js. What happens in your terminal and browser? Fix any issues that arise.

Now that you have your basic App component rendered in the browser through index.js, create a property of your choosing on App in index.js. The value for that property should be a string. Pass in your props to App and replace your original `<h1>` text with the property value you just passed in to the component. Your browser should now display the property value you passed into the component.

Time to convert your functional component into a class-based component. Without changing any actual content, comment out your functional App component and create a new class-based App component that renders the same props as the functional one did.

Now that your App is a class-based component, you can initialize state. Do that, and define a new property called "text" with some string as the value.

Your new component should display both values from props and state. (Hint: you have two options here - you can either concatenate these strings in the same pair of JSX curly braces, or you can place two sets of braces for each string. Your choice! Choose wisely.)

Add an input element to your App. Use the component's state to define its placeholder attribute. Add an "onChange" event to the input, and then handle the event to set a new property on the App's state that will be tied to the input's value attribute (pro tip: name this something appropriate considering it is an input event). Replace any "wrapping" divs with the <React.Fragment> tag. How does that change the ReactDOM? Why might that be important?

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
