import * as React from 'react';

import { connect } from 'react-redux';

interface IButtonProps {
  children: string;
  click: any;
}

function Button(props: IButtonProps) {
  const classes = require('./Button.scss');

  return (
    <button
      className={`button button--small ${classes.Button}`}
      onClick={props.click}
      // style={props.userPreferenceStyles.button}
    >
      {props.children}
    </button>
  );
}

export default connect()(Button);
