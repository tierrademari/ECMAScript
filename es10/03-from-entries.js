const entries = new Map([["name", "oscar", "valor ignorado", "otro valor ignorado"], ["age", 34], ["country", "CO" ]])
console.log(entries)
console.log(Object.fromEntries(entries))