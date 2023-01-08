

const Comment = ({ comment_text, user_name, time }) => {

    return <div className="comment-block__item">
        <div className="d-flex flex-row user-info">
            <img alt="фото комментатора" className="rounded-circle" src="https://img.icons8.com/ios-glyphs/30/null/user--v1.png" width="50" />
            <div className="d-flex flex-column justify-content-start">
                <span className="font-weight-bold name">
                    {user_name}
                </span>
                <span className="date text-black-50">{time}</span>
            </div>
        </div>
        <div className="mt-2">
            <p className="comment-text">
                {comment_text}
            </p>
        </div>
    </div>
}


export default Comment