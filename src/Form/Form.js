import React, { Component } from 'react';

export class Reservation extends Component {
    constructor(){
        super();
        this.state = {
            isGoing : true,
            noOfGuests : 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event){
        const target = event.target; 
        const value = target.type === 'checkbox' ?  target.checked : target.value;
        const name = target.name;
        this.setState({
            [name] : value
        });
    }
    render(){
        return(
            <form>
                <label>
                    Is Going:
                    <input name="isGoing" type="checkbox" checked={this.state.isGoing} onChange={this.handleInputChange}/>
                </label>
                <br />
                <label>
                    Number of Guests:
                    <input name="noOfGuests" type="number" value={this.state.noOfGuests} onChange={this.handleInputChange}/>
                </label>
            </form>
        );
    }

}
export default Reservation;