class user {
    constructor(name, age){
        this.name = name;
        this.age = name;
    }

    speak() {
        return 'Hello!';
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }

    set uAge(age) {
        this.age = age;
    }

}

const dev = new user('Mari', 29);
console.log(dev.greeting())