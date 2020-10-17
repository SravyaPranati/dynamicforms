import React from 'react'
class PersonalDetails extends React.Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: ''
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        return (
            <div className="personaldetails">Personal Details
                <div className="firstname">First Name
                <label><input type="text" name="firstName" value="" placeholder="First Name"></input></label>
                </div>
                <div className="secondname">Second Name
                <label><input type="text" name="secondName" value="" placeholder="Second Name"></input></label>
                </div>
                <div className="contactnumber">Contact Number
                <label>
                        <input type="number" pattern="[0-9]*" size="10" inputmode="numeric" name="contactnumber" value="" placeholder="Contact Number"></input></label>
                </div>
                <div className="email">Email
                <label><input type="text" name="email" value="" placeholder="Email"></input></label>
                </div>
            </div>


        )
    }
}
export default PersonalDetails;