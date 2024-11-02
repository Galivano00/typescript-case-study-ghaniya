//Name : Ghaniya 
// Soal 1: Fungsi getFullName
type Person = {
    firstName: string;
    lastName: string;
};

function getFullName(person: Person): string {
    return `${person.firstName} ${person.lastName}`;
}

const person: Person = { firstName: "Albert", lastName: "Oliviera" };
console.log(getFullName(person)); // Output : Albert Oliviera


// Soal 2: Fungsi wrapInArray
function wrapInArray<T>(item: T): T[] {
    return [item];
}

console.log(wrapInArray("hello")); // Output: ["hello"]
console.log(wrapInArray(123));     // Output: [123]
console.log(wrapInArray(true));    // Output: [true]
