import React from 'react';
import Enzyme, {mount, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import StarRatingComponent from 'react-star-rating-component';

import {List, ListItem} from '../components';

Enzyme.configure({ adapter: new Adapter() });

it('`List` exist and be a component', () => expect(List).toBeInstanceOf(Function));
it('`ListItem` exist and be a component', () => expect(ListItem).toBeInstanceOf(Function));

it('`List` should renders the list with all elements in the provided array', () => {
const listData = [
  {
    "bookName": "Book 1",
    "bookRating": 2
  },
  {
    "bookName": "Book 2",
    "bookRating": 10
  }
];
const component = mount(
  <List list={listData} />
);
const results = component.find('.list').children();
expect(results.length).toBe(listData.length);
});

it('`ListItem` element should render the list item with provided data', () => {
  const component = mount(
    <ListItem bookName='Book1' bookRating='9' />
  );
  expect(component.find('.list-item')).toBeTruthy();
  expect(component.find('.book-name')).toBeTruthy();
  expect(component.find('.book-rating')).toBeTruthy();
});

it('`StarRatingComponent` component should render the rating stars with provided data', () => {
  const component = mount(
    <StarRatingComponent 
      name="book-rating" 
      starCount={5} />
  );
  expect(component.find('.dv-star-rating')).toBeTruthy();
});

it('Random Rating Button should dispatch click event when clicks on it', () => {
  it('Test click event', () => {
    const mockCallBack = jest.fn();

    const button = shallow((<input type='button' onClick={mockCallBack}>Random Rating</input>));
    button.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
