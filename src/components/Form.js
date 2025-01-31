import React from 'react'

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            email: '',
            password: '',
            errors: {},
            isSubmitted: false
        }
    }

    validateForm = (e) => {
        e.preventDefault();
        let username = this.state.username;
        let email = this.state.email;
        let password = this.state.password;

        let errors = {};

        if(username.length == 0 || password.includes(username)) {
            errors.usernamerror = "Username cannot be empty or it shoulnt be present in password"
        }
        if(email.length == 0) {
            errors.emailerror = "Email cannot be empty"
        } 
        if(password.length < 8 || !(/\d/).test(password)) {
            errors.passworderror = "Password must contain min of 8 chars and a digit "
        }

        this.setState({ errors });

        if(Object.entries(errors).length === 0) {
            console.log("Form submitted succesfully");
            this.setState({ isSubmitted: true })
        }
    }

    render() {
        return (
            <>
                <form onSubmit={this.validateForm} className='w-50 p-4 border border-secondary shadow rounded mx-auto my-5'>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" value={this.state.username}
                        onChange={(e) => { this.setState({ username: e.target.value }) }}
                        />
                        {this.state.errors.usernamerror && 
                        <span className='text-danger'>{this.state.errors.usernamerror}</span>
                        }
                        
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" value={this.state.email}
                        onChange={(e) => { this.setState({ email: e.target.value }) }}
                        />
                        {this.state.errors.emailerror &&
                        <span className='text-danger'>{this.state.errors.emailerror}</span>
                        }
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="text" className="form-control" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}
                        />
                        {this.state.errors.passworderror &&
                        <span className='text-danger'>{this.state.errors.passworderror}</span>
                        }
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
                {this.state.isSubmitted && 
                <h4 className='text-success text-center'>Form submitted succesfully</h4>
                }
            </>
        )
    }
}

export default Form