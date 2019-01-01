import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Article extends PureComponent {
    render() {
        console.log(1);
        const { isOpen, article, onButtonClick } = this.props
        return(
            <div>
                <h2>
                    {article.title}
                    <button onClick = {() => onButtonClick(article.id)}>{isOpen ? 'close' : 'open'}</button>
                </h2>
                {isOpen && getBody(article)}
            </div>
        )
    }
}

function getBody(article) {
    return(
        <section>
            {article.text}
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