"use client"
function SignUp() {
    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <div className='d-flex align-items-center justify-content-center' style={{ "height": "80vh" }}>
            <form onSubmit={handleSubmit}>
                <div className='fs-3 my-3 text-center'>
                    Sign Up
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default SignUp
