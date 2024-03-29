import * as React from 'react';

import { Card, CardBody, CardHeader, CardText, Col, Jumbotron, Row } from 'reactstrap';

import createCategories from './img/createCategories.png';
import customizeAppearance from './img/customizeAppearance.png';
import organizeSpaces from './img/organizeSpaces.png';

function Benefits() {
  const classes = require('./Benefits.css');

  const benefits = [
    {
      demoImg: organizeSpaces,
      description: 'Group your bookmarks into what are called spaces. Each space has its own tab.',
      rowClass: 'OrganizeBookmarks',
      title: 'Organize your bookmarks into spaces',
    },
    {
      demoImg: createCategories,
      description: 'Group related bookmarks into what we call categories. This allows you to group your bookmarks.',
      rowClass: 'CreateCategories',
      title: 'Create categories for your bookmarks',
    },
    {
      demoImg: customizeAppearance,
      description: 'With over 40 themes to choose from, you can customize the theme of your bookmark spaces.',
      rowClass: 'CustomizeAppearance',
      title: 'Customize the appearance',
    },
  ];

  return (
    <Jumbotron className={classes.Benefits}>
      <h1>Benefits</h1>
      <div>
        {
          benefits.map((benefit, key) => (
            <Row key={key} className={`${classes.Benefit} ${classes[benefit.rowClass]}`}>
              <Col md={6}>
                <img
                  alt={benefit.description}
                  className={classes.Picture}
                  src={benefit.demoImg}
                />
              </Col>
              <Col md={3}>
                <Card className={classes.Card}>
                  <CardHeader>
                    <h3>{benefit.title}</h3>
                  </CardHeader>
                  <CardBody>
                    <CardText>{benefit.description}</CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          ))
        }
      </div>
    </Jumbotron>
  );
}

export default Benefits;
