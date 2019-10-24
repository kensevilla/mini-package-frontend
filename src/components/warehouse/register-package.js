import React from 'react';

class RegisterPackage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            wayBillNumber: "",
            recipient: "",
            phone: "",
            weight: ""
        };
    }
    handleChangeWaybillNumber = (event) => {
        this.setState({
            wayBillNumber : event.target.value
        })
    }
    handleChangeRecipient = (event) => {
        this.setState({
            recipient : event.target.value
        })
    }
    handleChangePhone = (event) => {
        this.setState({
            phone : event.target.value
        })
    }
    handleChangeWeight = (event) => {
        this.setState({
            weight : event.target.value
        })
    }
    registerPackage = () => {
        this.props.registerPackage(this.state);
    }
    render(){
        return(
            <div className="register-package">
                <h1>Package Warehouse-in</h1>
                <span>Waybill Number:</span> <input type="text" value={this.state.waybillNumber} onChange={this.handleChangeWaybillNumber}></input>
                <br></br>
                <span>Recipients:</span> <input type="text" value={this.state.recipient} onChange={this.handleChangeRecipient}></input>
                <br></br>
                <span>Phone:</span> <input type="text" value={this.state.phone} onChange={this.handleChangePhone}></input>
                <br></br>
                <span>Weight:</span> <input type="text" value={this.state.weight} onChange={this.handleChangeWeight}></input>
                <br></br>
                <button onClick={this.registerPackage}>Register Package</button>
            </div>
        );
    }
}

export default RegisterPackage;