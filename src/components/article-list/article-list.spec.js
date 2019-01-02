import React from 'react'
import { render, mount } from 'enzyme'
import ArticleList from './index'
import articles from '../../fixtures'

describe('Article List', () => {
    it('should render article list', () => {
        const wrapper = render(<ArticleList articles = {articles} />)
        expect(wrapper.find('.article__li').length).toEqual(articles.length)
    });

    it('all articles should be closed by default', () => {
        const wrapper = render(<ArticleList articles = {articles} />)
        expect(wrapper.find('.article-body').length).toEqual(0)
    });

    it('should open article on click', () => {
        const wrapper = render(<ArticleList articles = {articles} />)
    })
})