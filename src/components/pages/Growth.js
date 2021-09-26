import growth from "../images/growth.jpg"


function Growth() {
    return (
        <div className="container-fluit">
            <div className="row justify-content-evenly mt-2 mb-5">

                <div className="col-md-5 mt-3">
                    <img src={growth} className="d-block w-100 img-fluid shadow" alt="..." />
                </div>

                <div className="col-md-5  mt-3">

                    <h5 className="mt-2">HTML</h5>
                    <div className="progress">
                        <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <h5 className="mt-2">CSS</h5>
                    <div className="progress">
                        <div className="progress-bar bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <h5 className="mt-2">PYTHON</h5>
                    <div className="progress">
                        <div className="progress-bar bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <h5 className="mt-2">JAVASCRIPT</h5>
                    <div className="progress">
                        <div className="progress-bar bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <h5 className="mt-2">REACT</h5>
                    <div className="progress">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Growth;