import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';


const Paragraph = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <p className="para">
      Startup Investing, <br/> Now Simplified!
      </p>
    </div>
  );
}

export default Paragraph;