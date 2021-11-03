import React from "react";

function Contact(){
    return (
        <div className="box">
            <h2>Contact Form</h2>
            <form className="form-box">
                <mdb-form-control>
                    <input mdbInput type="text" id="typeText" class="form-control" />
                    <label mdbLabel class="form-label" for="typeText">First Name</label>
                </mdb-form-control>

                <mdb-form-control>
                    <input mdbInput type="text" id="typeText" class="form-control" />
                    <label mdbLabel class="form-label" for="typeText">Last Name</label>
                </mdb-form-control>

                <mdb-form-control>
                    <input mdbInput type="tel" id="typePhone" class="form-control" />
                    <label mdbLabel class="form-label" for="typePhone">Phone Number</label>
                </mdb-form-control>

                <mdb-form-control>
                    <input mdbLabel type="email" id="typeEmail" class="form-control" />
                    <label mdbInput class="form-label" for="typeEmail">Email input</label>
                </mdb-form-control>
                
                <div>
                    <button mdbRipple type="button" class="btn btn-primary">Button</button>
                </div>
                
            </form>
            
        </div>
    );
}

export default Contact;