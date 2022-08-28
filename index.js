// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(arr, name) {
    return arr.filter((el) => el.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(arr, name) {
    return arr.filter((el) => el[0] === name[0]);
}

const driver = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName(arr, name) {
    return arr.filter((el) => el.name === name);;
}