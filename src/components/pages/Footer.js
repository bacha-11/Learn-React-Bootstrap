

function Footer(){
    return(
        <div className="container-xxl">
            <div className="row text-white pt-4 pb-3 mt-5 justify-content-evenly" style={{backgroundColor:"#272727"}}>
                <div className="col-md-3">
                    <h4 className="mb-4">Look's <span className="text-danger">Developer</span></h4>
                    <p>
                    Pakistan, officially the Islamic Republic of Pakistan, 
                    is a country in South Asia. It is the world's fifth-most populous country, 
                    with a population exceeding 225.2 million, and has the world's second-largest Muslim population.
                    </p>
                </div>

                <div className="col-md-3 mt-3 mb-3">
                    <h4 className="mb-4">Importent Links</h4>
                    <p>
                        <a href="#" className="link-light text-decoration-none">Home</a><br />
                        <a href="#" className="link-light text-decoration-none">About</a><br />
                        <a href="#" className="link-light text-decoration-none">Contact</a><br />
                        <a href="#" className="link-light text-decoration-none">Service</a><br />
                    </p>
                </div>

                <div className="col-md-3">
                <h4 className="mb-4">Contact Us</h4>
                <p>
                        Pakistan kpk swat kanju <br />
                        Street: 1122 <br />
                        <i class="bi bi-telephone"></i> : +1234567890
                </p>
                </div>
            </div>

            <div className="row bg-secondary text-white text-center pt-3">
                <div className="col-12">
                    <p> copyright 2021 </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;