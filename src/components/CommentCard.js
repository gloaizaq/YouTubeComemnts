const CommentCard = (props) => {
    return (
        <div className="ui card">
            <div className="content">
                <div className="header">
                    <img alt="commenter avatar" src={props.data.snippet.topLevelComment.snippet.authorProfileImageUrl} className="ui avatar right spaced image" />
                    {props.data.snippet.topLevelComment.snippet.authorDisplayName}
                </div>
                <div className="description">
                    {props.data.snippet.topLevelComment.snippet.textOriginal}
                </div>
            </div>
            {props.children}
        </div>
    );
}

export default CommentCard;