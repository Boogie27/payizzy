




const RightSide = () => {
    return (
        <div className="right-side">
            <div className="form">
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input type="text" className="form-control error" placeholder="Type Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Phone</label>
                    <input type="text" className="form-control" placeholder="Type Phone Number"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="text" className="form-control" placeholder="Type Email Address"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">How Can We Help You?</label>
                    <textarea rows={4} cols={40}  className="form-control" placeholder="Type Description"></textarea>
                </div>
                <div className="form-group  button">
                    <button type="button">Send Message</button>
                </div>
            </div>
        </div>
    )
}




export default RightSide