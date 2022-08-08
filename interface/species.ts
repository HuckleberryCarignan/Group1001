interface Human {
    type: 'human';
    name: string;
    age: number;
    occupation?: string;
}

interface Inhuman {
    type: 'inhuman'
    name: string;
    age: number;
    superpower?: string;
}

export type Person = Human | Inhuman;
export const isInhuman = (person: Person): person is Inhuman => person.type === 'inhuman';
export const isHuman = (person: Person): person is Human => person.type === 'human';
export { Human, Inhuman };