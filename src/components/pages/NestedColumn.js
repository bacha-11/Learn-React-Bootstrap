
function NestedColumn() {
    return (
        <div className="container-fluit bg-dark text-white">
            <div className="row">
                <div className="col-lg-4 bg-info">col-lg-4</div>

                <div className="col-lg-8 bg-danger">
                    Nested Column Head
                    <div className="row">
                        <div className="col-lg-4 bg-primary">col-lg-4</div>
                        <div className="col-lg-4 bg-secondary">col-lg-4</div>
                        <div className="col-lg-4 bg-success">col-lg-4</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default NestedColumn;