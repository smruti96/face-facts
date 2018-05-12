import React, {Component} from 'react'
import {login} from '../Redux/action'
import {connect} from 'react-redux'

const flexStyle ={
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
}
class Login extends Component {
   constructor(props){
       super(props);
       this.state = {
           username: '',
           password: ''
       }
   }
    onLogin= (e) => {
        e.preventDefault()
        this.props.dispatch(login(this.state.username, this.state.password))
    }

    handleChange=(event)=>{
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    render(){
        return(
            <div style={{...flexStyle, flexDirection: 'column' ,height:'100vh',background: 'linear-gradient(to right, #360033 0%, #0b8793 100%)'}}>
                <h1 style={{fontFamily: 'skranji', color: 'white'}}>FACEFACTS</h1>
                <form className="input-field col s12 z-depth-3" style={{...flexStyle,background:'white',flexDirection:'column',padding:'15px'}} onSubmit={this.onLogin}>
                    <input 
                        id="autocomplete-input"
                        className="autocomplete"
                        name="username" 
                        type="text" 
                        placeholder="Username" 
                        onChange={this.handleChange}
                        value={this.state.username}/>
                    <input 
                        className="autocomplete"
                        name="password" 
                        type="password" 
                        placeholder="Password" 
                        onChange={this.handleChange}
                        value={this.state.password}/>
                    <button className="btn waves-effect waves-light" type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default connect()(Login);
