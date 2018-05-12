import React,{Component} from 'react';
import {connect} from 'react-redux'
import {getFaceDetails} from '../Redux/action'
import account from '../account.svg'

const flexStyle ={
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontFamily:'Roboto Condensed'
}

function mapStateToProps(state){
    return {
        user: state.user,
        ageGroup: state.ageGroup,
        gender: state.gender,
        emotions: state.emotions
    }
}

class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            imageUrl: ''
        }
    }

    handleOnChange = (event) => {
        this.setState({
            imageUrl: event.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.dispatch(getFaceDetails(this.state.imageUrl))
    }

    render(){
            return(
                <div style={{...flexStyle,height:'auto', flexDirection: 'column' ,background: 'linear-gradient(to bottom, #FF4E50 0%, #F9D423 100%)'}}>
                <h1>{this.props.user.name}</h1>
                <div style={flexStyle}>
                <h5 style={{margin:'10px'}}>{this.props.user.email}</h5>
                <h5 style={{margin:'10px'}}>{this.props.user.phone}</h5>
                </div>
                <div className="card small red darken-1" style={{height:'300px',width:'400px'}}>
                    <div className="card-image waves-effect waves-block waves-light">
                    {
                        this.state.imageUrl ? 
                        <img className="z-depth-3 activator" height="200px" width="200px" src={this.state.imageUrl} alt="User Image"/>
                        :
                        <img className="z-depth-3 activator" height="200px" width="200px" src={account} alt="User Image"/>
                    }
                    </div>
                    <div className="card-content white" style={flexStyle}>
                        <p className=" activator grey-text text-darken-4" style={{textAlign: 'center', width: '100%'}}>Click Image to know more after clicking the analyze button</p>
                   </div>
                    <div className="card-reveal yellow darken-2">
                        <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                        <p>Age Group: {this.props.ageGroup}</p>
                        <p>Gender: {this.props.gender}</p>
                        
                    </div>
                    </div>
                
                
                <form onSubmit={this.handleSubmit} className="input-field col s12 z-depth-3" style={{...flexStyle,background: 'white', flexDirection:'column',padding:'15px'}}> 
                    <input type="text" placeholder="Enter image URL" value={this.state.imageUrl} onChange={this.handleOnChange} />
                    <button className="waves-effect waves-teal btn-flat" type="submit">Analyze</button>
                </form>
                </div>

    )
}
}

export default connect(mapStateToProps)(Profile);