import React, { Component } from 'react'
import ArticleList from './components/article-list'

class App extends Component {

    render() {
        return (
          <div>
              <ArticleList articles = {this.props.articles} ref = {this.setListRef} />
          </div>
        );
    }

    setListRef = ref => {
        console.log('ref === ', ref);
    }
}

export default App
