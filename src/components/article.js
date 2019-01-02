import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CommentList from './comment-list'

class Article extends PureComponent {
    render() {
        const { isOpen, article, onButtonClick } = this.props
        return(
            <div>
                <h2>
                    {article.title}
                    <button 
                        className = 'article__btn'
                        onClick = {() => onButtonClick(article.id)}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h2>
                {isOpen && getBody(article)}
            </div>
        )
    }
}

function getBody(article) {
    return(
        <section className = 'article-body'>
            {article.text}
            <CommentList comments = {article.comments || []} />
        </section>
    )
}

Article.propTypes = {   
    isOpen: PropTypes.bool,
    article: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string,
    }),
    onButtonClick: PropTypes.func,
}

export default Article