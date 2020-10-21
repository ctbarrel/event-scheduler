import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'

const API_URL = process.env.REACT_APP_API_URL

export default class AddEventForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            user: props.user,
            name: '',
            month: 'A',
            day: 1
        }
    }

    handleSelectDay = () => {
        var setDay
        switch (this.state.month) {
            case 'B':
                setDay = 29
                break
            case 'D':
            case 'F':
            case 'I':
            case 'K':
                setDay = 30
                break
            default:
                setDay = 31
        }
        if (setDay < this.state.day) {
            this.setState({day: setDay})
        }
        return setDay
    }

    handleChange = ({target}) => {
        this.setState({[target.name]: target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(`${API_URL}schedule`, {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(this.props.refresh)
        .then(this.props.hide)
    }

    render() {
        return (
            <form id='create' onSubmit={this.handleSubmit}>

                <input name='name' 
                    value={this.state.name}
                    type='text'
                    onChange={this.handleChange}
                    placeholder='Event Name' 
                />
                <select name='month'
                    value={this.state.month}
                    onChange={this.handleChange}
                >
                    <option value='A'>Jan</option>
                    <option value='B'>Feb</option>
                    <option value='C'>Mar</option>
                    <option value='D'>Apr</option>
                    <option value='E'>May</option>
                    <option value='F'>Jun</option>
                    <option value='G'>Jul</option>
                    <option value='H'>Aug</option>
                    <option value='I'>Sep</option>
                    <option value='J'>Oct</option>
                    <option value='K'>Nov</option>
                    <option value='L'>Dec</option>
                </select>
                <input name='day'
                    value={this.state.day}
                    type='number'
                    onChange={this.handleChange}
                    min='1'
                    max={this.handleSelectDay()}
                />
                
                <Button variant='success' type='submit'>Add Event</Button>
            </form>
        )
    }
}