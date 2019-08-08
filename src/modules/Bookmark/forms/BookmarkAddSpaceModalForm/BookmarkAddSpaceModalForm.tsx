import * as React from 'react';
import { Component } from 'react';

import { connect } from 'react-redux';

import { Form, FormGroup } from 'reactstrap';
import AppModal from "../../../../components/containers/AppModal/AppModal";

class BookmarkAddSpaceModalForm extends Component {
  public confirmHandler() {
    // todo: Add a space when user clicks "Done" button.
  }

  public render() {
    return (
      <AppModal
        className="app-modal"
        confirmHandler={this.confirmHandler}
        title="Add Space"
      >
        <Form>
          <FormGroup>
            <input
              type="text"
              className="form-control"
              placeholder="Space Name"
            />
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              className="form-control"
              placeholder="Space Description"
            />
          </FormGroup>
        </Form>
      </AppModal>
    );
  }
}

export default connect()(BookmarkAddSpaceModalForm);
