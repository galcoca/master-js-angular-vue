import React, { useRef, useState } from "react";

function Form({onCancel, onSubmit, submitting}){
    const firstnameRef = useRef();
    const lastnameRef = useRef();
    const bioRef = useRef();
    const genderMRef = useRef();
    const genderFRef = useRef();
    const genderORef = useRef();

    let [user, setUser] = useState({});
    let gender = '';

    const getForm = (e) => {
        e.preventDefault();
        if (genderFRef.current.checked) {
            gender = genderFRef.current.value;
        } else if (genderMRef.current.checked) {
            gender = genderMRef.current.value;
        } else {
            gender = genderORef.current.value;
        }
        user = {
            nombre: firstnameRef.current.value,
            apellidos: lastnameRef.current.value,
            bio: bioRef.current.value,
            gender: gender
        }
        setUser(user);
    }

    return (
        <div id="content">
            <form className="midForm" onSubmit={getForm}>
                <div className="formGroup">
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" name="firstname" ref={firstnameRef} />
                </div>

                <div className="formGroup">
                    <label htmlFor="lastname">Last Name</label>
                    <input type="text" name="lastname" ref={lastnameRef} />
                </div>

                <div className="formGroup">
                    <label htmlFor="bio">Bio</label>
                    <textarea name="bio" ref={bioRef}></textarea>
                </div>

                <div className="formGroup radioButtons">
                    <input type="radio" name="gender" value="male" ref={genderMRef} />Male
                    <input type="radio" name="gender" value="female" ref={genderFRef} />Female
                    <input type="radio" name="gender" value="other" ref={genderORef} />Other
                </div>
                <div className="clearfix"></div>

                <input type="submit" value="Submit" className="btn btnSuccess" />
            </form>
        </div>
    )
}

export default Form
