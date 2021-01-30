import * as React from "react";

export interface State {
    textColor: string,
    textValue: string,
    measureLabel: string,
    measureValue: string,
    size: number
}

export const initialState: State = {
    textColor: "black",
    textValue: "Hello GPPB Paris!",
    measureLabel: "",
    measureValue: "",
    size: 250
}

export class ReactVisualDemo extends React.Component<{}, State>{
    
    private static updateCallback: (data: object) => void = null;
    public state: State = initialState;
    private readonly defaultBackgroundColor = "white";

    constructor(props: any) {
        super(props);
        this.state = initialState;
        console.log("constructor()");
    }

    render() {
        console.log("render()");
        
        const { textColor, textValue, measureLabel, measureValue, size } = this.state;

        const style: React.CSSProperties = { color: textColor, background: this.defaultBackgroundColor, width: size, height: size };

        return (
            <div className="reactVisualDemo" style={style}>
                <p>
                    {textValue}
                    <br/>
                    {measureLabel ? measureLabel : ""}
                    <br/>
                    {measureValue ? measureValue: ""}
                </p>
            </div>
        );
    }

    public static update(newState: State) {
        console.log("update()");
        if(typeof ReactVisualDemo.updateCallback === 'function'){
            ReactVisualDemo.updateCallback(newState);
        }
    }

    public componentWillMount() {
        console.log("componentWillMount()");
        ReactVisualDemo.updateCallback = (newState: State): void => { this.setState(newState); };
    }

    public componentWillUnmount() {
        console.log("componentWillUnmount");
        ReactVisualDemo.updateCallback = null;
    }
}

export default ReactVisualDemo;
