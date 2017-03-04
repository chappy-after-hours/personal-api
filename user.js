var user = {
  name: 'Jeff Chapman',
  location: 'Walnut Creek, CA',
  occupations: ['Employer Relations','Entrepreneur', 'janitor'],
  hobbies: [
    {
      name: 'kickboxing',
      type: 'sport'
    },
    {
      name: 'reading',
      type: 'hobby'
    },
    {
      name: 'basketball',
      type: 'sport'
    }
  ],
  family: [
    {
      name: 'Marie',
      relation: 'wife',
      gender: 'female'
    },
    {
      name: 'Luke',
      relation: 'son',
      gender: 'male'
    },{
      name: 'Brett',
      relation: 'friend',
      gender: 'male'
    }
  ],
  restaurants: [
    {
      name: 'sweeto burrito',
      type: 'mexican',
      rating: 10
    },
    {
      name: 'cocos',
      type: 'sit-down',
      rating: 6
    },
    {
      name: 'tucanos',
      type: 'buffet',
      rating: 9.5
    }
  ]
};
module.exports = user;
