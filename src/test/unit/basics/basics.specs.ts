// import { loggerFactory } from '@main/config/ConfigLog4j';
// import 'jest-extended';

class Name {
    public readonly firstname: string | null;

    constructor(firstname: string | null) {
        this.firstname = firstname;
    }
}

describe('basics', () => {
    // const logger = loggerFactory.getLogger('test.ActionBus.specs.ts');

    test('Test Jest', () => {
        expect(true).toBe(true);
    });

    // test('Number should be 28', () => {
    //     const numberToTest = '28';
    //     expect(numberToTest).toBe('28');
    //
    //     const myName = 'Mike';
    //     expect(myName).toBe('Mike');
    //
    //     const name: string = 'Mike';
    //     expect(name).toBe('Mike');
    // });

    // test('Array', () => {
    //     const hobbies: number[] = [1, 2, 3];
    //     expect(hobbies.length).toBe(3);
    //
    //     const names1 = ['Mike', 2];
    //     expect(names1.length).toBe(2);
    // });
    //
    // test('Tuples', () => {
    //     const address: [string, number] = ['Mike', 99];
    //
    //     expect(address.length).toBe(2);
    // });

    // test('enum', () => {
    //     enum Color {
    //         RED,
    //         GREEN,
    //         BLUE = 5,
    //     }
    //
    //     // expect(Color.)
    //     const color: Color = Color.GREEN;
    //     expect(color).toBe(1);
    //     expect(Color.BLUE).toBe(5);
    // });
    //
    // test('The car should have 4 wheels', () => {
    //     const car = { brand: 'Audi', wheels: 4 };
    //     expect(car.wheels).toBe(4);
    // });
    //
    // test('should keine Ahnung', () => {
    //     // const name1 = new Name("Mike");
    //     // expect(name1.firstname).toBe("Mike");
    //
    //     // tslint:disable-next-line:no-null-keyword
    //     const name2 = new Name(null);
    //     expect(name2!.firstname).toBeNull();
    // });
    //
    // // test('TS deep dive Types 1', () => {
    // //     interface Map<T> {
    // //         [key1: string]: T;
    // //     }
    // //     const m1: Map<string> = { a: 'Mike' };
    // //     const m2: Map<number> = { a: 1 };
    // //
    // //     let key: keyof Map<number>; // string
    // //     let value: Map<number>['foo']; // number
    // // });
    //
    // test('Change Type', () => {
    //     interface Person {
    //         id: number;
    //         name: string;
    //         lastName: string;
    //         load: () => Promise<Person>;
    //     }
    //
    //     // ID übernimmt den "number"-Type vom Feld Person[id]
    //     type ID = Person['id'];
    //     const id: ID = 5;
    //     // geht nicht: const id: ID = "5";
    //     expect(id).toBe(5);
    //
    //     // ko kann folgende Werte annehmen: id | name | lastName | load
    //     const ko: keyof Person = 'id';
    //     logger.debug(ko);
    //
    //     // Felder die der "Condition" entsprechen werden mit dem Typ "never" markiert
    //     // @ts-ignore
    //     type FilterFlags<Base, Condition> = {
    //         [Key in keyof Base]: Base[Key] extends Condition ? Key : never
    //     };
    //
    //     // Damit bekommt ff folgenden Typ:
    //     //      {
    //     //          id: never, name: string, lastName: string, load: never
    //     //      }
    //     //
    //     // @ts-ignore
    //     const ff: FilterFlags<Person, string> = {
    //         lastName: 'lastName',
    //         name: 'name',
    //     };
    //     expect(ff.name).toBe('name');
    //
    //     // [keyof Base] -> id | name | lastName | load
    //     type AllowedNames<Base, Condition> = FilterFlags<Base, Condition>[keyof Base];
    //
    //     // [keyof Base] -> id | name | lastName | load
    //     // Damit wird auf 'FilterFlags<Base, Condition>' als eine Art Index-Operator zugegriffen
    //     //
    //     // x = { id: never, name: string, lastName: string, load: never }[ id | name | lastName | load ]
    //     //
    //     // Inhalt von x wäre dann: (die Typen!!!!)
    //     //  name | lastName
    //     //
    //     // Bei der Zuweisung auf der linken Seite wird der "never" Typ ignoriert
    //     //
    //     // @ts-ignore
    //     const an1: AllowedNames<Person, string> = 'name'; // oder lastName
    //
    //     // Ein neuer Typ wird erstellt der sich nur aus den Feldern
    //     // aus AllowedNames<> zusammensetzt
    //     type SubType<Base, Condition> = Pick<Base, AllowedNames<Base, Condition>>;
    //
    //     // an kann nur name oder lastName annehmen
    //     let an: AllowedNames<Person, string>;
    //     an = 'name';
    //     an = 'lastName';
    //     // an = "xyz";
    //     logger.debug(`an: ${an}`);
    //
    //     // tslint bezieht sich auf die any - tslint möchte nicht dass der Typ zu universell wird
    //     // tslint:disable-next-line
    //     type MyFunction = (_: any) => any;
    //
    //     // Filtert die Funktionen aus Person heraus
    //     type Callable = SubType<Person, MyFunction>;
    //
    //     // "callable" enthält nur noch die Funktionen - alle anderen Props wurde weggefiltert
    //     // @ts-ignore
    //     const callable: Callable = {
    //         load: (): Promise<Person> => {
    //             // tslint:disable-next-line:no-null-keyword
    //             return new Promise<Person>((): null => null);
    //         },
    //     };
    //
    //     // Hilft beim ausschließen von Feldern
    //     type ExcludeFields<Base, Condition> = Pick<
    //         Base,
    //         {
    //             [/*1*/ Key in keyof Base]: Base[Key] extends Condition ? never : Key
    //         } /* 2 */[keyof Base]
    //     >;
    //
    //     type NoCallback<Base> = ExcludeFields<Base, MyFunction>;
    //     const ncb: NoCallback<Person> = {
    //         id: 1,
    //         name: 'Mike',
    //         lastName: 'Mitterer',
    //     };
    //     expect(ncb.id === 1).toBeTruthy();
    //
    //     // Literal type TID - kann nur den Wert "id" annehmen
    //     type TID = 'id';
    //
    //     // @ts-ignore
    //     const tid: TID = 'id';
    //
    //     // Alle Typen werden zu einem String - außer Funktionen, die werden zu "never"
    //     type Type2String<Base, Condition> = {
    //         [Key in keyof Base]: Key extends Condition
    //             ? string
    //             : Base[Key] extends MyFunction
    //             ? never
    //             : string
    //     };
    //
    //     const ncb2: Type2String<NoCallback<Person>, TID> = {
    //         id: '1',
    //         name: 'Mike',
    //         lastName: 'Mitterer',
    //     };
    //     expect(ncb2.id === '1').toBeTruthy();
    // });
});
