import * as React from 'react';

import {Link} from 'react-router-dom';

import {Jumbotron} from 'reactstrap';

function Heading() {
    const classes = require('./Heading.css');

    return (
        <Jumbotron className={classes.Heading}>
            <h1>Welcome to Bookmark Buddy</h1>
            <hr/>
            <Link to="/user/register" className="btn btn-danger">Get Started</Link>
        </Jumbotron>
    );
}

export default Heading;
