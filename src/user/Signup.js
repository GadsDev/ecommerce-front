import React from 'react'
import Layout from "../core/Layout"

const Signup = () => {
    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-mute">Name</label>
                <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="text-mute">Email</label>
                <input type="email" className="form-control"/>
            </div>
            <div className="form-group">
                <label className="text-mute">Password</label>
                <input type="password" className="form-control"/>
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    )
    return (
        <Layout title="Signup" description="Node React E-commerce App" className="container col-md-8 offset-md-2">
            {signUpForm()}
        </Layout>
    )    
}

export default Signup
