"use strict";

import DataView = powerbi.DataView;
import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import VisualObjectInstance = powerbi.VisualObjectInstance;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;
import IViewport = powerbi.IViewport;

import powerbi from "powerbi-visuals-api";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ReactVisualDemo, initialState } from "./component";
import { VisualSettings } from "./settings";
import "./../style/visual.less";

export class Visual implements IVisual {

    private target: HTMLElement;
    private reactRoot: React.ComponentElement<any, any>;
    private settings: VisualSettings;
    private viewport: IViewport;

    constructor(options: VisualConstructorOptions) {
        this.reactRoot = React.createElement(ReactVisualDemo, {});
        this.target = options.element;

        ReactDOM.render(this.reactRoot, this.target);
    }

    public update(options: VisualUpdateOptions) {

        console.log(options);

        if (options.dataViews && options.dataViews[0]) {
            const dataView: DataView = options.dataViews[0];

            this.viewport = options.viewport;
            const { width, height } = this.viewport;
            const size = Math.min(width, height);

            this.settings = VisualSettings.parse(dataView) as VisualSettings;
            const object = this.settings.reactVisualDemo;

            ReactVisualDemo.update({
                textColor: object && object.textColor ? object.textColor : undefined,
                textValue: object && object.textValue ? object.textValue : undefined,
                measureLabel: dataView.metadata.columns[0].displayName,
                measureValue: dataView.single.value.toString(),
                size
            });
        } else {
            this.clear();
        }
    }

    private clear() {
        console.log("clear()");
        ReactVisualDemo.update(initialState);
    }

    public enumerateObjectInstances(
        options: EnumerateVisualObjectInstancesOptions
    ): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject {

        return VisualSettings.enumerateObjectInstances(this.settings || VisualSettings.getDefault(), options);
    }
}