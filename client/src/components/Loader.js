import React from 'react';
import Loading from '../images/Loading.svg';

const Loader = () => {
  return (
    <div className="loader">
      <figure>
        <img src={Loading} alt="cute loader" />
      </figure>
    </div>
  );
};

export default Loader;