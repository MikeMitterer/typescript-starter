export declare const userName: {
    name: string;
    age: number;
};
/**
 * Type-Safe definition eines Objects
 *
 * Das Objekt hat zwei parameter: name + age
 */
export declare const userData: {
    name: string;
    age: number;
};
/**
 * Das komplexe Object hat eine Callback als zweiten parameter
 */
export declare const complexObject: {
    name: string;
    callback: (age: number) => string;
};
/**
 * Type-Aliases
 *
 * Hier steht auf der rechten Seite eigentlich kein value sondern eine Type-Definition
 */
declare type ComplexObject = {
    name: string;
    data: number[];
};
export declare const anotherComplexObject: ComplexObject;
export declare const myRealAge: number | string;
export declare function showMyRealAge(age: number | string): string;
/**
 * Die Funktion endet nie - deshalb der return type: never
 */
export declare function neverEnds(): never;
export declare function tryToReturnNull(paramShouldNotBeNull: string): string | null;
export {};
