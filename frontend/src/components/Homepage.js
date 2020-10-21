import React, {Component} from 'react'
import AddCalEvent from './AddEvent'
import EventDisplay from './EventDisplay'
const API_URL = process.env.REACT_APP_API_URL

export default class extends Component {

    constructor(props) {
        super(props)
        
        this.state = {
            calendar: [],
            userView: ''
        }
    }

    handleChange = ({target}) => {
        this.setState({[target.name]: target.value})
        this.refresh()
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
                return (
                    <EventDisplay event={event} refresh={this.refresh}/>
                )
            }
        )
        return (
            <div>
                <h1>Calendar</h1>
                
                <input name='userView'
                value={this.state.userView}
                placeholder='Enter Username Here' 
                onChange={this.handleChange}/><br />

                <AddCalEvent refresh={this.refresh} user={this.state.userView}/>
                {displayCalendar}
            </div>
        )
    }
}