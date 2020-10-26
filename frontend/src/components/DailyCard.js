import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

const API_URL = process.env.REACT_APP_API_URL

export default class DisplayCalendar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            today: []
        }
    }

    refresh = () => {
        fetch(`${API_URL}schedule/day/${this.props.dayNum}`)
            .then(res => res.json())
            .then(today => this.setState({ today }))
        
    }

    componentDidMount(){
        this.refresh()
    }

    render() {
        const mapToday = this.state.today.map(
            event => {
                if(event.month === this.props.month) {
                    return(
                        <p key={event._id}>{event.name}</p>
                    )
                }
            }
        )
        return (
            <Card className='dayCard'>
                <div className='calendarnumber'>{this.props.dayNum}</div>
                {mapToday}
            </Card>
        )
    }
}