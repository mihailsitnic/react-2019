import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import commentsToggle from '../decorators/commentsToggle'

class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    static propTypes = {
        comments: PropTypes.array.isRequired,
        // from decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    render() {
        const { isOpen, toggleOpen } = this.props
        const text = isOpen ? 'Less' : 'More'

        return (
            <div>
                <button onClick = {toggleOpen}>{text}</button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        const {comments, isOpen} = this.props
        if (!isOpen) return null
        const body = comments.length ? (
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}
            </ul>
        ) : <h3>No Comments</h3>

        return (
            <div>{body}</div>
        )
    }
}

export default commentsToggle(CommentList)