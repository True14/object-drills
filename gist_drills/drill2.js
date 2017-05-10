const myObj = {
  foo: 12,
  bar: 39,
  fum: 'hello',
  quux: 87,
  spam: ['hey','goodbye']
}

for(key in myObj){
  console.log(`${key}: ${myObj[key]}`);
}
