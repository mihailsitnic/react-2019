import React, { Component } from 'react'

class UserForm extends Component {
    state = {
        userName: '',
    }

    handleChange = (e) => {
        if (e.target.value.length > 10) {
            return this.setState({
                userName: ''
            })
        }
        this.setState({
            userName: e.target.value
        })
    }

    render() {
        return(
            <div>
                user name <input value = {this.state.userName} onChange = {this.handleChange} />
            </div>
        )
    }
}

export default UserForm