const myArray = [
  {
    name: 'Jon',
    job_title: 'Person'
  },

  {
    name: 'Bob',
    job_title: 'Builder'
  },

  {
    name: 'Jack',
    job_title: 'Samurai'
  }
];


myArray.forEach(key => {
  console.log(`${key.name}: ${key.job_title}`)
});
