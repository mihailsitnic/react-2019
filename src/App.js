import React, { Component } from 'react'
import ArticleList from './components/article-list'
import UserForm from './components/user-form'
import Select from 'react-select'

class App extends Component {

    state = {
        selected: null
    }

    handleSelect = selected => this.setState({ selected })

    render() {
        const { articles } = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
          <div>
              <UserForm />
              <Select options = {options} value = {this.state.selected} onChange = {this.handleSelect} />
              <ArticleList articles = {this.props.articles} ref = {this.setListRef} />
          </div>
        );
    }

    setListRef = ref => {
        console.log('ref === ', ref);
    }
}

export default App
