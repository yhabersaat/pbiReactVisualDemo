import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;
export declare class ReactVisualDemoSettings {
    textColor: string;
    textValue: string;
}
export declare class VisualSettings extends DataViewObjectsParser {
    reactVisualDemo: ReactVisualDemoSettings;
}
