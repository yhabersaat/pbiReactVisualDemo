import VisualConstructorOptions = powerbi.extensibility.visual.VisualConstructorOptions;
import VisualUpdateOptions = powerbi.extensibility.visual.VisualUpdateOptions;
import IVisual = powerbi.extensibility.visual.IVisual;
import VisualObjectInstance = powerbi.VisualObjectInstance;
import EnumerateVisualObjectInstancesOptions = powerbi.EnumerateVisualObjectInstancesOptions;
import VisualObjectInstanceEnumerationObject = powerbi.VisualObjectInstanceEnumerationObject;
import powerbi from "powerbi-visuals-api";
import "./../style/visual.less";
export declare class Visual implements IVisual {
    private target;
    private reactRoot;
    private settings;
    private viewport;
    constructor(options: VisualConstructorOptions);
    update(options: VisualUpdateOptions): void;
    private clear;
    enumerateObjectInstances(options: EnumerateVisualObjectInstancesOptions): VisualObjectInstance[] | VisualObjectInstanceEnumerationObject;
}
