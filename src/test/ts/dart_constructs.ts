class DartSimulations1 {
    private constructor(private _name:String) {}

    public static forName(name:String) {
        return new DartSimulations1(name);
    }

    get name(): String { return this._name; }
}

class FactoryConstructor {
    private constructor(public readonly name:String) {}

    public static forName(name:String) {
        return new FactoryConstructor(name);
    }
}

describe("Simulation des factory-CTORs aus Dart", () => {
    test("Describe your test", () => {
        const ds = DartSimulations1.forName("Mike");
        expect(ds.name).toBe("Mike");
    });

    test("Mit readonly param", () => {
        const fc = FactoryConstructor.forName("Mike");
        expect(fc.name).toBe("Mike");
    });
});
