import React from 'react'
import PropTypes from 'prop-types'

function Comment({ comment }) {
    return (
        <p>
            {comment.text} <b>{comment.user}</b>
        </p>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string.isRequired,
        user: PropTypes.string
    }).isRequired
}

export default Comment