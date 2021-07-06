const CommentCard = (props) => {
    const onVoteClick = (vote) => {
        props.onVoteClick(props.data.id, vote);
    }

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
            <div className="ui two bottom attached buttons">
                <div onClick={() => onVoteClick('good')} className="ui button">
                    Good
                </div>
                <div onClick={() => onVoteClick('bad')} className="ui button">
                    Bad
                </div>
            </div>
        </div>
    );
}

export default CommentCard;