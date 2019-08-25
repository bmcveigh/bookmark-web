import * as React from 'react';
import {ChangeEvent, Component} from 'react';

import { connect } from 'react-redux';

import { Form, FormGroup } from 'reactstrap';
import AppModal from "../../../../components/containers/AppModal/AppModal";
import {IPropsReduxBase} from "../../../../components/interfaces";
import {addBookmarkSpace, fetchBookmarks} from "../../../../store/bookmarks/actions";

import AuthService from 'src/services/auth/AuthService';
import { Services } from 'src/services/services';

interface IProps extends IPropsReduxBase {
  userProfile: any;
}

interface IState {
  spaceDescription: string;
  spaceName: string;
}

class BookmarkAddSpaceModalForm extends Component<IProps, IState> {
  protected Auth: AuthService;

  public constructor(props: IProps) {
    super(props);

    this.Auth = Services.authService();

    this.state = {
      spaceDescription: '',
      spaceName: '',
    };

    this.confirmHandler = this.confirmHandler.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  public async confirmHandler() {
    if (this.props.dispatch) {
      const result = await addBookmarkSpace(this.state.spaceName, this.props.userProfile.id);
      this.props.dispatch(result);
      this.props.dispatch(await fetchBookmarks());
    }
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
