

function Contact() {
    return (
        <div className="container-xxl">
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

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14143117.941545919!2d60.32337114882688!3d30.068124090484673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38db52d2f8fd751f%3A0x46b7a1f7e614925c!2sPakistan!5e0!3m2!1sen!2s!4v1632666143912!5m2!1sen!2s"  height="250" style={{width:"100%" }} allowfullscreen="" loading="lazy"></iframe>

                </div>
            </div>
        </div>
    )
}

export default Contact;