import * as React from 'react';
import {ChangeEvent, Component} from 'react';

import { connect } from 'react-redux';

import { Form, FormGroup } from 'reactstrap';
import AuthService from "../../../../components/auth/AuthService";
import AppModal from "../../../../components/containers/AppModal/AppModal";

interface IState {
  spaceDescription: string;
  spaceName: string;
}

class BookmarkAddSpaceModalForm extends Component<any, IState> {
  protected Auth: AuthService;

  public constructor(props: IState) {
    super(props);

    this.Auth = new AuthService();

    this.state = {
      spaceDescription: '',
      spaceName: '',
    };

    this.confirmHandler = this.confirmHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  public async confirmHandler() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/vnd.api+json');

    // Add a space when user clicks "Done" button.
    const options = {
      body: JSON.stringify({
        data:{
          attributes: {
            name: this.state.spaceName,
            owner_id: this.props.userProfile.id,
          },
          type: "bookmark_space--bookmark_space",
        },
      }),
      headers,
      method: 'POST',
    };
    await this.Auth.fetch('api/bookmark_space/bookmark_space', options);
  }

  public handleChange(event: ChangeEvent) {
    const target: any = event.target;
    const state = {};
    state[target.name] = target.value;
    this.setState(state);
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
              onChange={this.handleChange}
              name="spaceName"
            />
          </FormGroup>
          <FormGroup>
            <input
              type="text"
              className="form-control"
              placeholder="Space Description"
              name="spaceDescription"
            />
          </FormGroup>
        </Form>
      </AppModal>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    userProfile: state.userLoginReducer.data,
  }
}

export default connect(mapStateToProps)(BookmarkAddSpaceModalForm);
