
class Dog {
  constructor(name,age,gender,hobby,photo, likes) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.hobby = hobby;
      this.photo = photo;
      this.likes = likes
  }
}

export const boys = [
    {name: 'axel', age: '3', gender: 'M', hobby: 'eating shoes', photo:'https://i.ibb.co/K2Np76F/3.jpg', likes: 5, disabled: false},
    {name:'chernishevky', age:'4', gender: 'M', hobby: 'playing with brothers', photo: 'https://i.ibb.co/bPJQvQ3/6.jpg', likes: 8, disabled: false},
    {name:'alen', age:'5', gender: 'M', hobby: 'watching the cat',  photo:'https://i.ibb.co/k5RYwMm/7.jpg', likes: 3, disabled: false},
    {name:'toto', age:'4', gender: 'M', hobby: 'eating carrot',  photo:'https://i.ibb.co/zF2WTXZ/DSC-0745.jpg', likes: 2, disabled: false},
    {name:'timka', age:'3', gender: 'M', hobby: 'singing songs',  photo:'https://i.ibb.co/Ct4BDc0/9.jpg', likes: 4, disabled: false},
    {name:'bublik', age:'5', gender: 'M', hobby: 'jumping around',  photo:'https://i.ibb.co/q0CmY9h/10.jpg', likes: 7, disabled: false},
    {name:'pushkin', age:'2', gender: 'M', hobby: 'eating insects',  photo:'https://i.ibb.co/k6xG7tW/13.jpg', likes: 5, disabled: false},
    {name:'stepan', age:'3', gender: 'M', hobby: 'sleeping belly-up',  photo:'https://i.ibb.co/YDr8yWM/8.jpg',
    likes: 4, disabled: false}
];

export const girls = [    
    {name:'aida', age:'1', gender: 'F', hobby: 'hiding from everyone', photo: 'https://i.ibb.co/vJD5hr7/14.jpg', likes: 8, disabled: false},
    {name:'jemmy', age:'5', gender: 'F', hobby: 'plying with the ball',  photo:'https://i.ibb.co/h15fyc6/2.jpg', likes: 7, disabled: false},
    {name:'laika', age:'3', gender: 'F', hobby: 'exploring the room',  photo:'https://i.ibb.co/KsyVy3d/11.jpg', likes: 4, disabled: false},
    {name:'ziza', age:'2', gender: 'F', hobby: 'playing with the carpet',  photo:'https://i.ibb.co/7jN1CSP/4.jpg', likes: 1, disabled: false},
    {name:'kisa', age:'4', gender: 'F', hobby: 'watching others',  photo:'https://i.ibb.co/HNh4HhJ/5.jpg', likes: 11, disabled: false},
    {name:'rory', age:'3', gender: 'F', hobby: 'running from everyone',  photo:'https://i.ibb.co/GQDjWnm/12.jpg', likes: 6, disabled: false}
];

export const allDogs = boys.concat(girls);


