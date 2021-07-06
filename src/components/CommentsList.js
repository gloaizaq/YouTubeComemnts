import React from "react";
import CommentCard from "./CommentCard";

class CommentsList extends React.Component {
    state = {
        allComments: this.props.comments,
        goodComments: [],
        badComments: [],
    };

    onVoteClick = (id, vote) => {
        if (vote === 'bad') {
            this.moveToBad(id);
        }
        if (vote === 'good') {
            this.moveToGood(id);
        }
    }

    moveToBad = (id) => {
        const newBadComment = this.state.allComments.find((comment) => {
            return comment.id === id;
        });
        this.setState({badComments: [...this.state.badComments, newBadComment]});

        this.removeFromAllComments(id);
    }

    moveToGood = (id) => {
        const newGoodComment = this.state.allComments.find((comment) => {
            return comment.id === id;
        });
        this.setState({goodComments: [...this.state.goodComments, newGoodComment]});

        this.removeFromAllComments(id);
    }

    removeFromAllComments = (id) => {
        const aux = this.state.allComments.filter((comment) => {
            return comment.id !== id;
        });
        this.setState({allComments: aux});
    }

    render() {
        let allCommentsList = this.state.allComments.map(
            comment => {
                return <CommentCard key={comment.id} data={comment} onVoteClick={this.onVoteClick}/>
            }
        );
        let goodCommentsList = this.state.goodComments.map(
            comment => {
                return <CommentCard key={`good-${comment.id}`} data={comment} onVoteClick={this.onVoteClick}/>
            }
        );
        let badCommentsList = this.state.badComments.map(
            comment => {
                return <CommentCard key={`bad-${comment.id}`} data={comment} onVoteClick={this.onVoteClick}/>
            }
        );

        return (
            <div className="ui grid">
                <div className="three column row">
                    <div className="column">
                        <h1>Unassigned</h1>
                        {allCommentsList}
                    </div>
                    <div className="column">
                        <h1>Good</h1>
                        {goodCommentsList}
                    </div>
                    <div className="column">
                        <h1>Bad</h1>
                        {badCommentsList}
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentsList;