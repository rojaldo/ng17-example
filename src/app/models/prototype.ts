import { TrivialCard } from "./trivial";

class Prototype {
    public component!: TrivialCard;
    public circularReference!: ComponentWithBackReference;

    public clone(): this {
        const clone = Object.create(this);

        clone.component = Object.create(this.component);

        // Cloning an object that has a nested object with backreference
        // requires special treatment. After the cloning is completed, the
        // nested object should point to the cloned object, instead of the
        // original object. Spread operator can be handy for this case.
        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this },
        };

        return clone;
    }
}

class ComponentWithBackReference {
    public prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
}

export function getPrototype(json: any): TrivialCard {
    const p1 = new Prototype();
    p1.component = new TrivialCard(json);
    p1.circularReference = new ComponentWithBackReference(p1);

    return p1.clone().component;
}