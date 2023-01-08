import { useEffect, useState } from 'react'
import Comment from './Comment'
import './style.css'
import { Link } from 'react-router-dom';

const CommentBlock = (props) => {

    const [commentTextInArea, setCommentTextInArea] = useState('')
    const [comments, setComments] = useState([])


    useEffect(() => {
        const url = "http://localhost/getcomments.php"
        let fData = new FormData()
        fData.append('company_id', props.props.company_id)
        fData.append('category', props.categoryComments)


        fetch(url, {
            method: 'POST',
            header: {
                'Content-Type': 'text/html; charset=utf-8'
            },
            body: fData
        })
            .then(response => response.text())
            .then(response => {
                setComments(JSON.parse(response))
            })
            .catch(error => alert(error))
    }, [comments])

    const clearCommentText = () => {
        setCommentTextInArea('')
    }

    const sendComment = () => {
        if (commentTextInArea.length === 0) {
            alert('Введите текст комментария!')
        }
        else {
            const url = "http://localhost/addcomments.php"
            let fData = new FormData()
            fData.append('user_name', props.props.userName[0].join(''))
            fData.append('company_id', props.props.company_id)
            fData.append('comment_text', commentTextInArea)
            fData.append('category', props.categoryComments)

            fetch(url, {
                method: 'POST',
                header: {
                    'Content-Type': 'text/html; charset=utf-8'
                },
                body: fData
            })
                .then(response => console.log(response))
                .catch(error => alert(error))

            alert('Комментарий добавлен!')
            setCommentTextInArea('')

            setTimeout(() => {
                setComments(comments)
            }, 1000)
        }
    }

    const textArea = <div className="bg-dark mt-2  comment-text">
        <div className="d-flex flex-row align-items-start">
            <img alt="ваше фото" className="rounded-circle" src="https://img.icons8.com/ios-glyphs/30/null/user--v1.png" width="50" />
            <p>{props.props.userName}:&nbsp;</p>
            <textarea
                name="comment"
                type="text"
                className="form-control ml-1 shadow-none textarea comment-text"
                value={commentTextInArea}
                onChange={(e) => setCommentTextInArea(e.target.value)}
            ></textarea>
        </div>
        <div className="mt-2 text-right">
            <button type="button" name='send' className="btn btn-primary btn-sm shadow-none" onClick={sendComment}>Отправить комментарий</button>
            <button type="button" name='clear' className="btn btn-outline-primary btn-sm ml-1 shadow-none" onClick={clearCommentText}>Очистить поле</button></div>
    </div>

    return <div className="container comment-container">
        <div className="d-flex justify-content-center row">
            <div className="col-md-8">
                <div className="d-flex flex-column comment-section">
                    <div className="bg-dark p-3">
                        {comments.map(comment => <Comment {...comment} key={comment.comment_id} />)}
                        {(props.props.userName.length) ? textArea : <Link to='/login' className="btn btn-primary btn-sm shadow-none">Авторизируйтесь, для написания комметария</Link>}

                    </div>

                </div>
            </div>
        </div>
    </div >
}




export default CommentBlock