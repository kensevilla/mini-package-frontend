import React from 'react';
import PackageResource from '../../api/PackageResource';

class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : ""
        };
    }
    componentDidMount = ()=>{
        PackageResource.getAll()
        .then(res => res.json())
        .then(res => {
            console.log(res);
        });
    }
    render(){
        return(
            <div className="home-page">
                <table>
                     <tr>
                        <th>WayBill Number</th>
                        <th>Recipients</th>
                        <th>Phone</th>
                        <th>Status</th>
                        <th>Time</th>
                     </tr>
                </table>
            </div>
        );
    }
}

export default HomePage;