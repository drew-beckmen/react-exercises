import React from 'react';

//-------FUNCTIONAL COMPONENTS-------------------
// function App(props) {
//   return (
//     <h1>Hello {props.name}!</h1>
//   );
// }

// const App = props => {
//   return (
//     <div>
//       <h1>This is my first React component!</h1>
//       <h2>It was created by {props.name}</h2>
//     </div>
//   )
// }

//-------CLASS COMPONENTS-----------------------
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // name: "Drew Beckmen", 
      text: "State will change dynamically depending on input tag!", 
      // hasLoaded: false -- THIS IS AUTOMATICALLY PUT HERE BY REACT 
    }
  }

  handleChange(val) {
    this.setState({
      text: val
    }); 
  }

  handleButton() {
    this.setState({
      hasLoaded: !this.state.hasLoaded
    })
  }

  //Will run before anything is displayed
  //You will get a different output!
  // componentDidMount() {
  //   this.setState({
  //     hasLoaded: true 
  //   })
  // }

  render() {
    console.log(this.state.hasLoaded)
    if (this.state.hasLoaded) {
      return (
        <React.Fragment>
          <h1>This is my first React component THAT HAS FULLY LOADED</h1>
          <h2>It was created by {`${this.props.name} ${this.state.text}`}</h2>
          <h3>This is a class component</h3>
          <input
            placeholder = {this.state.text}
            onChange = {(event) => this.handleChange(event.target.value)}
          />
          <button onClick = {() => this.handleButton()}>
            "Unload the page"
          </button>
        </React.Fragment>
      )
    } else {
      return (
        <div> 
          <h1>Page is still loading!</h1>
          <p>Loading...</p>
          <button onClick = {() => this.handleButton()}>
            Load the page!
          </button>
        </div>
      )
    }
  }
}

export default App;
