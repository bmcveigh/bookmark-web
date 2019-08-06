import React from 'react';

import { Card, Col, Jumbotron, Row } from 'reactstrap';

import classes from './Pricing.css';

function Pricing() {
  const plans = {
    availableFeatures: {
      createMultipleBookmarkSpaces: 'Create multiple bookmark spaces',
      customizeAppearance: 'Customize appearance',
    },
    availablePlans: [
      {
        featuresIncluded: {
          createMultipleBookmarkSpaces: null,
        },
        name: 'Basic',
        price: '0.00',
      },
      {
        featuresIncluded: {
          createMultipleBookmarkSpaces: null,
          customizeAppearance: null,
        },
        name: 'Premium',
        price: '0.99',
      },
      {
        featuresIncluded: {
          createMultipleBookmarkSpaces: null,
          customizeAppearance: null,
        },
        name: 'Enterprise',
        price: '1.99',
      },
    ],
  };

  return (
    <Jumbotron className={classes.Pricing}>
      <h1>Pricing</h1>
      <p>Below are the plans that we offer.</p>
      <Row>
        {
          plans.availablePlans.map((plan, index) => (
            <Col md={4} key={index}>
              <Card className={classes.Card}>
                <h3>{plan.name}</h3>
                <span>${plan.price} /month</span>
                <span className={classes.FeaturesLabel}>Features Included</span>
                <div className={classes.Features}>
                  {
                    Object.keys(plan.featuresIncluded).map((featureKey, fIndex) => (
                      <div
                        key={fIndex}
                        className={classes.Feature}
                      >
                        {plans.availableFeatures[featureKey]}
                      </div>
                    ))
                  }
                </div>
              </Card>
            </Col>
          ))
        }
      </Row>
    </Jumbotron>
  );
}

export default Pricing;
