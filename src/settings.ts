"use strict";

import { dataViewObjectsParser } from "powerbi-visuals-utils-dataviewutils";
import DataViewObjectsParser = dataViewObjectsParser.DataViewObjectsParser;

export class ReactVisualDemoSettings {
    public textColor: string = "black";
    public textValue: string = "Hello Power BI Bootcamp 2021!";
}

export class VisualSettings extends DataViewObjectsParser {
    public reactVisualDemo: ReactVisualDemoSettings = new ReactVisualDemoSettings();
}
