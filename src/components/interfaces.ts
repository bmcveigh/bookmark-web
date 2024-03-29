export interface IPropsReduxBase {
    dispatch?: (object: any) => void;
}

/**
 * Prop definitions for onChange events.
 */
export interface IChangePropsBase {
    onChange: (event: any) => void;
}

/**
 * Prop definitions for onChange events.
 */
export interface IKeyUpPropsBase {
    onKeyUp?: (event?: any) => void;
}
