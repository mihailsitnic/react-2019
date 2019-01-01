import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Article from './article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired,
        // from accordion decorator
        openItemId: PropTypes.string,
        toggleItem: PropTypes.func
    }

    setContainerRef = containerRef => console.log(containerRef);

    render() {
        const { articles, openItemId, toggleItem } = this.props
        const articleElements = articles.map(article =>
                <li key = {article.id}>
                    <Article 
                        article = {article} 
                        isOpen = {openItemId === article.id} 
                        onButtonClick = {toggleItem}/>
                </li>
            )
        return (
            <ul ref = {this.setContainerRef}>
                {articleElements}
            </ul>
        )
    }
}

export default accordion(ArticleList)