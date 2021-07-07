import CommentCard from "./CommentCard";

const ApprovalCard = (props) => {
    const onVoteClick = (vote) => {
        props.onVoteClick(props.data.id, vote);
    }

    return (
        <CommentCard {...props}>
            <div className="ui two bottom attached buttons">
                <div onClick={() => onVoteClick('good')} className="ui button">
                    Good
                </div>
                <div onClick={() => onVoteClick('bad')} className="ui button">
                    Bad
                </div>
            </div>
        </CommentCard>
    );
}

export default ApprovalCard;