import * as React from "react";
export interface State {
    textColor: string;
    textValue: string;
    measureLabel: string;
    measureValue: string;
    size: number;
}
export declare const initialState: State;
export declare class ReactVisualDemo extends React.Component<{}, State> {
    private static updateCallback;
    state: State;
    private readonly defaultBackgroundColor;
    constructor(props: any);
    render(): JSX.Element;
    static update(newState: State): void;
    componentWillMount(): void;
    componentWillUnmount(): void;
}
export default ReactVisualDemo;
