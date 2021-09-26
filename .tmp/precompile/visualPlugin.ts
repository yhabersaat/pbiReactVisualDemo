import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api";
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin;
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions;
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var reactVisualDemo004A41DA536548D0B1BCDED19492110E: IVisualPlugin = {
    name: 'reactVisualDemo004A41DA536548D0B1BCDED19492110E',
    displayName: 'PBI React Visual Demo',
    class: 'Visual',
    apiVersion: '3.8.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["reactVisualDemo004A41DA536548D0B1BCDED19492110E"] = reactVisualDemo004A41DA536548D0B1BCDED19492110E;
}

export default reactVisualDemo004A41DA536548D0B1BCDED19492110E;