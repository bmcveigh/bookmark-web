import * as React from 'react';

import { connect } from 'react-redux';

import HoverTooltip from '../HoverTooltip/HoverTooltip';

interface ICardProps {
  cardHeading: string;
  cardWidth: number;
  className: string;
  children: any;
  helpText: string;
}

function Card(props: ICardProps) {
  const classes = require('./Card.scss');

  return (
    <div
      className={`${classes[`col-md-${props.cardWidth}`]} ${classes['bg-gray-light']} ${classes['m-medium']} ${classes['p-medium']} ${classes.Card}`}
      // style={props.userPreferenceStyles.card}
    >
      <h4
        className={classes.CardHeading}
        // style={props.userPreferenceStyles.cardHeading}
      >
        {props.helpText ? (
          <HoverTooltip
            helpText={props.helpText}
            tooltipId={`tooltip--${props.cardHeading.replace(/ /g, '')}`}
          >
            {props.cardHeading}
          </HoverTooltip>
        ) : props.cardHeading}
      </h4>
      <div
        className={classes.CardBody}
        // style={props.userPreferenceStyles.card}
      >
        {props.children}
      </div>
    </div>
  );
}

Card.defaultProps = {
  cardHeading: '',
  cardWidth: 4,
};

export default connect()(Card);
