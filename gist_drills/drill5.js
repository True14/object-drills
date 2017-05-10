const myArray = [
  {
    name: 'Jon',
    job_title: 'Person',
    boss: 'Jack'
  },

  {
    name: 'Bob',
    job_title: 'Builder',
    boss: 'Jack'
  },

  {
    name: 'Jack',
    job_title: 'Samurai'
  }
];


myArray.forEach(key => {
  if (key.hasOwnProperty('boss')) {
    console.log(`${key.job_title} ${key.name} reports to ${key.boss}.`)
  } else {
    console.log(`${key.job_title} ${key.name} doesn't report to anybody.`)
  }
});
