import React from 'react';
import PropTypes from 'prop-types';

const Error = ({loadBooks}) => {
  return (
    <p>
      There was an error loading the repos.
      <button onClick={loadBooks}>Try again</button>
    </p>
  );
};

export default Error;

Error.propTypes = {
  loadData: PropTypes.func
};
