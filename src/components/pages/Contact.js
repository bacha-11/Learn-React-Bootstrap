

function Contact() {
    return (
        <div className="container-fluit">
            <div className="row justify-content-evenly pt-5 pb-5" style={{backgroundColor: "#f1f1f1"}}>

                <div className="col-md-5 mt-4">
                    <h3 className="mb-4">Contact</h3>
                    <form>

                        <div className="mb-3">
                            <label for="name" className="form-label">Full name</label>
                            <input type="text" className="form-control" id="name" />
                        </div>

                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" />
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>


                        <button type="submit" className="btn btn-warning">Submit</button>
                    </form>
                </div>

                <div className="col-md-5 mt-4">
                    <h3 className="mb-4">Address</h3>
                    <p>
                        Pakistan kpk swat kanju <br />
                        Street: 1122 <br />
                        <i class="bi bi-telephone"></i> : +1234567890
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Contact;