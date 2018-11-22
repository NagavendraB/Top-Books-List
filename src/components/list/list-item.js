import React from 'react';
import PropTypes from 'prop-types';
import StarRatingComponent from 'react-star-rating-component';

const ListItem = (props) => (
  <div className='list-item'>
    <span className='book-name'>{props.bookName}</span>
    <span className='book-rating'>
      <StarRatingComponent 
        name="book-rating" 
        starCount={10}
        value={props.bookRating}
        onStarClick={props.onClickStar} />
    </span>
  </div>
);

ListItem.propTypes = {
  bookName: PropTypes.string,
  bookRating: PropTypes.oneOfType([ PropTypes.string,  PropTypes.number]),
  onClickStar: PropTypes.func
};

export default ListItem;
