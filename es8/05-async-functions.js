const fnAsync = (something) => {
    return new Promise((resolve, reject) => {
      (something) 
      ? setTimeout(() => resolve('Async!'), 2000)
      : reject(new Error('Error!'));
    });
  }

const anotherFn = async() => {
    const something = await fnAsync(true);
    console.log(something);
    console.log('Hello!');
}

console.log('Before');
anotherFn();
console.log('After');