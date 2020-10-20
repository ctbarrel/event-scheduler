import React, {Component} from 'react'

const API_URL = process.env.REACT_APP_API_URL

export default class extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            calendar: []
        }
    }

    refresh = () => {
        fetch(`${API_URL}schedule`)
            .then(res => res.json())
            .then(calendar => this.setState({ calendar }))
    }

    componentDidMount(){
        this.refresh()
    }

    render() {
        const displayCalendar = this.state.calendar.map(
            event => {
                console.log(event)
                return (
                    <p key={event._id}>{event.name}</p>
                )
            }
        )
        return (
            <div>
                <h1>Calendar</h1>
                {displayCalendar}
            </div>
        )
    }
}