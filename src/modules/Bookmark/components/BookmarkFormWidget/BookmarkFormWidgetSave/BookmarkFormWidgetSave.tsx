import * as React from 'react';
import {Col, Row} from "reactstrap";
import SaveCancelButtons from "../../../../../components/widgets/SaveCancelButtons/SaveCancelButtons";

class BookmarkFormWidgetSave extends React.Component {
    public constructor(props: any) {
        super(props);

        this.handleCancel = this.handleCancel.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    public handleCancel(event: any) {
        event.preventDefault();
        // todo
    }

    public handleSave() {
        // todo
    }

    public render() {
        const classes = require('./BookmarkFormWidgetSave.scss');

        return (
            <Row className={classes.BookmarkFormWidgetSave}>
                <Col md={12}>
                    <SaveCancelButtons
                        handleCancel={this.handleCancel}
                        handleSave={this.handleSave}
                    />
                </Col>
            </Row>
        );
    }
}

export default BookmarkFormWidgetSave;
