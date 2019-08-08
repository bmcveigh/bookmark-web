import * as React from 'react';

import { Tooltip } from 'reactstrap';

interface IHoverTooltipProps {
  children: any;
  helpText: string;
  tooltipId: string;
}

interface IHoverTooltipState {
  tooltipOpen: boolean;
}

class HoverTooltip extends React.Component<IHoverTooltipProps, IHoverTooltipState> {
  public constructor(props: any) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false,
    };
  }

  public toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen,
    });
  }

  public render() {
    return (
      <span>
        <span id={this.props.tooltipId}>{this.props.children}</span>
        <Tooltip isOpen={this.state.tooltipOpen} target={this.props.tooltipId} toggle={this.toggle}>
          {this.props.helpText}
        </Tooltip>
      </span>
    );
  }
}

export default HoverTooltip;
