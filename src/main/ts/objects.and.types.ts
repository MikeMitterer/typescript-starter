let name: string = "Mike";

export const userName = {
    name: name,
    age: 99
};

/**
 * Type-Safe definition eines Objects
 *
 * Das Objekt hat zwei parameter: name + age
 */
export const userData: { name: string, age: number } = {
    name: "Gerda",
    age: 99
};

/**
 * Das komplexe Object hat eine Callback als zweiten parameter
 */
export const complexObject: { name: string, callback: (age: number) => string } = {
    name: "Mike",
    callback: function (age: number): string {
        return `Age: ${age}`
    }
}

/**
 * Type-Aliases
 *
 * Hier steht auf der rechten Seite eigentlich kein value sondern eine Type-Definition
 */
type ComplexObject = { name: string, data: number[]};

export const anotherComplexObject: ComplexObject = {
    name: "Mike",
    data: [4, 5, 6]
};

// - Union Types -------------------------------------------------------------------------------------------------------

export const myRealAge: number | string = 99;

export function showMyRealAge(age: number | string) : string {
    return typeof age == "number" ? `N: ${age}` : `S: ${age}`;
}

// - never Type --------------------------------------------------------------------------------------------------------

/**
 * Die Funktion endet nie - deshalb der return type: never
 */
export function neverEnds() : never {
    throw new Error("An error occurred!")
}

// - not nullable Types ------------------------------------------------------------------------------------------------

export function tryToReturnNull(paramShouldNotBeNull : string) : string | null {
    return paramShouldNotBeNull == "Mike" ? paramShouldNotBeNull : null;
}


