import React from 'react';

class BookPickup extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div>
                <h1>Book a pickup</h1>
                <span>Waybill Number: </span><input type="text"></input>
                <span>Pick-up Time: </span><input type="datetime-local"></input>
                <button>Confirm</button>
                <button>Cancel</button>
            </div>
        );
    }
}

export default BookPickup;