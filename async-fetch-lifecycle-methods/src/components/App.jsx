import React from 'react'; 
import Cards from './Cards'
import People from './People'

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            films: null, 
            people: null, 
            showFilms: false, 
            showPeople: false 
        }
        this.baseURL = "https://ghibliapi.herokuapp.com/"
    }

    componentDidMount() {
        fetch(this.baseURL + "films")
        .then(resp => resp.json())
        .then(obj => this.setState({films: obj}))

        fetch(this.baseURL + "people")
        .then(resp => resp.json())
        .then(obj => this.setState({people: obj}))
    }

    render() {
        let button = <button 
            className="btn btn-outline-success" type="button" disabled={this.state.showPeople}
            onClick = {(event) => this.setState({showFilms: !this.state.showFilms})}>
            {(this.state.showFilms) ? "Hide Films" : "Show Films"}
        </button>

        let displayPeople = <button 
            className="btn btn-outline-success" type="button" disabled={this.state.showFilms}
            onClick = {(event) => this.setState({showPeople: !this.state.showPeople})}>
            {(this.state.showPeople) ? "Hide People" : "Show People"}
        </button>
        if (!this.state.showFilms && !this.state.showPeople) {
            return (
                <div>
                    {button}
                    {displayPeople}
                    <h1>You Need to Click A Button to Display Info!</h1>
                </div>
            )
        }
        else if (this.state.showFilms) {
            return (
                <div>
                    {button}
                    {displayPeople}
                    <Cards list={this.state.films} />
                </div>
            )
        }
        else {
            return (
                <div>
                    {button}
                    {displayPeople}
                    <People list={this.state.people} />
                </div>
            )
        }
    }
}

export default App; 