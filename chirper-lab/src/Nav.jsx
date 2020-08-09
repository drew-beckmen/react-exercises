import React, { Component } from 'react'; 
import Form from './Form.jsx'
class Nav extends Component {
    
    constructor(props) {
        super(props); 
        this.state = {
            renderForm: false 
        }
    }
    
    render() {
        return (
            <div>
                <nav className="navbar navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                    <a className="navbar-brand">Chirper</a>
                    <form className="form-inline">
                        <button 
                            className="btn btn=outline-success" type="button"
                            onClick = {(event) => this.setState({renderForm: !this.state.renderForm})}>
                            Add a New Chirp
                        </button>
                    </form>
                </nav>
                {this.state.renderForm && <Form />}
            </div>
        )
    }
}

export default Nav; 

