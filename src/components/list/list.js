import React from 'react';
import PropTypes from 'prop-types';
import ListItem from './list-item';

const List = (props) => (
  <div className='list'>
    {props.list.map((book, index) => 
      <ListItem 
        key={index}
        bookName={book.bookName} 
        bookRating={book.bookRating}
        onClickStar={(selectedStars) => props.onClickStar(selectedStars, index)} 
      />
    )}
  </div>
);

List.propTypes = {
  list: PropTypes.array,
  onClickStar: PropTypes.func
};

export default List;