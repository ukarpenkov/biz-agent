

const Comment = () => {

    return <>
        <div className="d-flex flex-row user-info">
            <img alt="фото комментатора" className="rounded-circle" src="https://img.icons8.com/ios-glyphs/30/null/user--v1.png" width="50" />
            <div className="d-flex flex-column justify-content-start">
                <span className="font-weight-bold name">Marry Andrews</span>
            </div>
        </div>
        <div className="mt-2">
            <p className="comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </>
}


export default Comment