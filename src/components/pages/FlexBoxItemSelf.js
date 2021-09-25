
function FlexBoxItemSelf(){
    return(
        <div className="container-fluit">
            <div className="row bg-dark align-items-end">
                <div className="col-3 bg-warning  align-self-center">div1</div>
                <div className="col-3 bg-success align-self-start">div2</div>
                <div className="col-3 bg-danger align-self-end">div3</div>
                <div className="col-3 bg-info ">div4</div>
            </div>
        </div>
    )
}

export default FlexBoxItemSelf;