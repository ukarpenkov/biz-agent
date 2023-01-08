import Comment from './Comment'
import './style.css'

const CommentBlock = () => {



    return <div className="container comment-container">
        <div className="d-flex justify-content-center row">
            <div className="col-md-8">
                <div className="d-flex flex-column comment-section">
                    <div className="bg-dark p-3">
                        <Comment />
                        <Comment />

                        <div className="bg-dark mt-2  comment-text">
                            <div className="d-flex flex-row align-items-start">
                                <img alt="ваше фото" className="rounded-circle" src="https://img.icons8.com/ios-glyphs/30/null/user--v1.png" width="50" />
                                <textarea className="form-control ml-1 shadow-none textarea comment-text"></textarea>
                            </div>
                            <div className="mt-2 text-right"><button className="btn btn-primary btn-sm shadow-none" type="button">Post comment</button><button className="btn btn-outline-primary btn-sm ml-1 shadow-none" type="button">Cancel</button></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div >
}




export default CommentBlock