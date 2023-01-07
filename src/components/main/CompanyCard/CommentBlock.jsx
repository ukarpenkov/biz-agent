import './style.css'

const CommentBlock = () => {
    return <div className="container comment-container">
        <div className="d-flex justify-content-center row">
            <div className="col-md-8">
                <div className="d-flex flex-column comment-section">
                    <div className="bg-dark p-3">
                        <div className="d-flex flex-row user-info"><img alt="фото комментатора" className="rounded-circle" src="https://img.icons8.com/ios-glyphs/30/null/user--v1.png" width="50" />
                            <div className="d-flex flex-column justify-content-start"><span className="font-weight-bold name">Marry Andrews</span><span className="date text-black-50 ">Shared publicly - Jan 2020</span></div>
                        </div>
                        <div className="mt-2">
                            <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="bg-dark p-2">
                            <div className="d-flex flex-row align-items-start"><img alt="ваше фото" className="rounded-circle" src="https://img.icons8.com/ios-glyphs/30/null/user--v1.png" width="50" /><textarea className="form-control ml-1 shadow-none textarea"></textarea></div>
                            <div className="mt-2 text-right"><button className="btn btn-primary btn-sm shadow-none" type="button">Post comment</button><button className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
}




export default CommentBlock