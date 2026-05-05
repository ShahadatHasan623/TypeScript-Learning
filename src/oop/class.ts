//oop-- class >>> object

// class Animal {
//   name: string;
//   species: string;
//   sound: string;
//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }

//   makeSound (){
//     console.log(`The Animal is making sound ${this.sound}`);
//   }
// }

// const dog =new Animal("Dogesh vai","dog","gawo gawo")
// const cat = new Animal("cat mama","cat","meaw meaw")

// console.log(cat.makeSound());

// console.log(dog.name);

//Parameter properties

class Animal {
  constructor(
    public name: string,
    public species: string,
    public sound: string,
  ) {}

  makeSound() {
    console.log(`The Animal is making sound ${this.sound}`);
  }
}

const dog = new Animal("dog vai", "dog", "geow geow");

console.log(dog.name);
