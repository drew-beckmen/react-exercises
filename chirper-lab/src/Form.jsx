import React, { Component } from 'react'; 
import ChirpList from './ChirpList.jsx'

class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: [
                {text: "HI!", id: 0}, 
                {text: "BYE!", id: 1}
            ]
        }
        this.handleFormSubmit.bind(this)
    }

    handleFormSubmit(event) {
        event.preventDefault()
        const chirpText = event.target[0].value 
        const newItem = {text: chirpText, id: this.state.items.length}
        this.setState({items: [...this.state.items, newItem]})
        {debugger}
        event.target.reset()
    }
    
    render() {
        { console.log(this.state.items) }
        return (
            <div> 
                <div className="form-group">
                    <form onSubmit={(event) => this.handleFormSubmit(event) } >
                        <label>What do you want to Chirp?</label>
                        <input type="text" id="content" className="form-control" />
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </form>
                </div>
                <ChirpList items={this.state.items} />
            </div>
        )
    }
}

export default Form; 