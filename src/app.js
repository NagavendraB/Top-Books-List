import React, {Component} from 'react';
import axios from 'axios';
import {orderBy} from 'lodash';

// Components
import {Error, Loader, List} from './components';

// Helpers
import {LOAD_BOOKS_API_CONFIG} from './helpers/configurations';

// CSS
import './assets/css/hexad-app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loading: true,
      error: false,
      isGenerateBtnClicked: false,
    };

    this.randomInterval = 0;
  }

  componentDidMount() {
    this.loadBooks();
  }

  // It loads the list of books with random rating
  loadBooks = () => {
    this.setState({ loading: true });
    return axios.request(LOAD_BOOKS_API_CONFIG).then(result => {
      this.setState({
        list: result.data,
        loading: false,
        error: false
      });
      this.sortList();
    })
    .catch(error => this.setState({loading: false, error}));
  }

  // It calls function 'loadBooks' periodically or it clears the interval
  loadRandomData = (isGenerateBtnClicked) => {
    if (isGenerateBtnClicked) {
      this.randomInterval = setInterval(this.loadBooks, 1000);
    } else {
      clearInterval(this.randomInterval);
    }
  }

  // It sets the user selected rating for a book and reorder the list accordingly
  onClickStar = (nextValue, index) => {
    let {list} = this.state;

    list[index].bookRating = nextValue;
    this.setState({list});
    setTimeout(this.sortList, 1500);
  }

  // It will make the btnClicked flag true/false and lists the books accordingly
  onClickRandomRating = () => {
    const {isGenerateBtnClicked} = this.state;
    
    this.setState({isGenerateBtnClicked: !isGenerateBtnClicked});
    this.loadRandomData(!isGenerateBtnClicked);
  }

  // It sorts the list according to bookRating in ascending order
  sortList = () => {
    const {list} = this.state;
    
    this.setState({list: orderBy(list, ['bookRating'], ['asc'])});
  }

  render() {
    const {loading, error, list, isGenerateBtnClicked} = this.state;
    const generateButtonText = isGenerateBtnClicked ? 'Stop Random Rating' : 'Random Rating';

    return (
      <div className='hexad-app'>
        {error && <Error loadBooks={this.loadBooks} />}
        {loading && <Loader />}
        <List 
          list={list} 
          onClickStar={this.onClickStar} />
        <input 
          className='generate-random-rating'
          type='button' 
          value={generateButtonText}  
          onClick={this.onClickRandomRating} />
      </div>
    );
  }
}

export default App;