import { Name as NameToExport } from "./address/Name";
import {
    addValues as addValuesToExport,
    main as mainToExport,
    sayMyName as sayMyNameToExport,
} from "./index";

declare global {
    namespace MyLib {
        export type Name = NameToExport;
        export const Name: typeof NameToExport;

        export const addValues: typeof addValuesToExport;
        export const main: typeof mainToExport;
        export const sayMyName: typeof sayMyNameToExport;
    }
}

(window as any).MyLib = {
    Name: NameToExport,
    addValues: addValuesToExport,
    main: mainToExport,
    sayMyName: sayMyNameToExport,
};
