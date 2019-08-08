import * as React from 'react';

import { faPencilAlt, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HoverTooltip from '../../elements/HoverTooltip/HoverTooltip';

interface ICrudButtonsProps {
    editButtonLabel: string;
    editButtonId: string;
    editButtonClick: () => void;
    deleteButtonLabel: string;
    deleteButtonId: string;
    deleteButtonClick: () => void;
}

function CrudButtons(props: ICrudButtonsProps) {
  return (
    <span>
      <HoverTooltip
        helpText={props.editButtonLabel}
        tooltipId={props.editButtonId}
      >
        <a
          href="#"
          className="text-warning"
          onClick={props.editButtonClick}
        >
          <FontAwesomeIcon icon={faPencilAlt} />
        </a>
      </HoverTooltip>
      <HoverTooltip
        helpText={props.deleteButtonLabel}
        tooltipId={props.deleteButtonId}
      >
        <a
          href="#"
          className="text-danger"
          onClick={props.deleteButtonClick}
        >
          <FontAwesomeIcon icon={faWindowClose} />
        </a>
      </HoverTooltip>
    </span>
  );
}

export default CrudButtons;

