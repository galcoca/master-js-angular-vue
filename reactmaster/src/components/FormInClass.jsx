import React, {Component} from "react";

class Form extends Component {

    firstnameRef = React.createRef();
    lastnameRef = React.createRef();
    bioRef = React.createRef();
    genderMRef = React.createRef();
    genderFRef = React.createRef();
    genderORef = React.createRef();

    state = {
        user: {}
    };

    getForm = (e) => {
        e.preventDefault();
        let gender = '';

        if(this.genderFRef.current.checked){
            gender = this.genderFRef.current.value;
        } else if(this.genderMRef.current.checked) {
            gender = this.genderMRef.current.value;
        } else {
            gender = this.genderORef.current.value;
        }

        let user = {
            nombre: this.firstnameRef.current.value,
            apellidos: this.lastnameRef.current.value,
            bio: this.bioRef.current.value,
            gender: gender
        };

        this.setState({
            user: user
        });

    }

    render(){
        return(
            <div id="content">
                <form className="midForm" onSubmit={this.getForm} >
                    <div className="formGroup">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" name="firstname" ref={this.firstnameRef}/>
                    </div>

                    <div className="formGroup">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" name="lastname" ref={this.lastnameRef}/>
                    </div>

                    <div className="formGroup">
                        <label htmlFor="bio">Bio</label>
                        <textarea name="bio" ref={this.bioRef}></textarea>
                    </div>

                    <div className="formGroup radioButtons">
                        <input type="radio" name="gender" value="male" ref={this.genderMRef}/>Male
                        <input type="radio" name="gender" value="female" ref={this.genderFRef}/>Female
                        <input type="radio" name="gender" value="other" ref={this.genderORef}/>Other
                    </div>
                    <div className="clearfix"></div>

                    <input type="submit" value="Submit" className="btn btnSuccess"/>
                </form>
            </div>
        )
    }
}

export default Form