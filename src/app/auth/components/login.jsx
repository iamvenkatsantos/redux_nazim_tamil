import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <input value={this.props.LoginState.fieldOne} 
                onChange={(event)=>this.props.updateFieldOne('fieldOne',event.target.value)} />
                <br/>
                {this.props.LoginState.fieldOne}
            </div>
        )
    }
}
