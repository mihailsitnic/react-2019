import React, { Component } from 'react'
import ArticleList from './components/article-list'
import UserForm from './components/user-form'

class App extends Component {

    render() {
        return (
          <div>
              <UserForm />
              <ArticleList articles = {this.props.articles} ref = {this.setListRef} />
          </div>
        );
    }

    setListRef = ref => {
        console.log('ref === ', ref);
    }
}

export default App
