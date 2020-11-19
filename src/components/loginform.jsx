import React, {useState} from 'react'

const LoginForm = props => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");


    return(
        <form className="col-3 mx-auto my-3 ">
            <div className="form-group">
                <label>First Name</label>
                <input 
                    type="text" 
                    className="form-control"
                    firstname="firstname"
                    value={firstname}
                    onChange= {(e) => setFirstName(e.target.value) }
                />
                <span className="danger">{ firstname.length > 2 ? "" : "Entry must be at least 2 characters"} </span>
            </div>
            <div className="form-group">
                <label>Last Name</label>
                <input 
                    type="text" 
                    className="form-control"
                    lastname="lastname"
                    value={lastname}
                    onChange= {(e) => setLastName(e.target.value) }
                />
                 <span className="danger">{ lastname.length > 2 ? "" : "Entry must be at least 2 characters"} </span>
            </div>
            <div className="form-group">
                <label>Email </label>
                <input 
                    type="text" 
                    className="form-control"
                    email="email"
                    value={email}
                    onChange= {(e) => setEmail(e.target.value) }
                />
                <span className="danger">{ email.length > 5 ? "" : "Entry must be at least 5 characters"} </span>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input 
                    type="text" 
                    className="form-control"
                    password="password"
                    value={password}
                    onChange= {(e) => setPassword(e.target.value) }
                />
                 <span className="danger">{ password.length > 8 ? "" : "Entry must be at least 8 characters"}</span>

                 <span1 className="danger">{ password !== confirmpassword ? "" : "Passwords must match"} </span1>
            </div>
            <div className="form-group">
                <label>confirm password</label>
                <input 
                    type="text" 
                    className="form-control"
                    confirmpassword="confirmpassword"
                    value={confirmpassword}
                    onChange= {(e) => setConfirmPassword(e.target.value) }
                />
                <span className="danger">{ password !== confirmpassword ? "" : "Passwords must match"} </span>
            </div>
        </form>
    )
}
export default LoginForm