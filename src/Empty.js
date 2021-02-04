import React, { Component } from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

class Dog {
    constructor(name,age,gender,hobby,photo) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.hobby = hobby;
        this.photo = photo
    }
}

export const boys = [
    {name: 'axel', age: '3', gender: 'M', hobby: 'eating shoes', photo:'https://i.ibb.co/K2Np76F/3.jpg'},
    {name:'chernishevky', age:'4', gender: 'M', hobby: 'playing with brothers', photo: 'https://i.ibb.co/bPJQvQ3/6.jpg'},
    {name:'alen', age:'5', gender: 'M', hobby: 'watching the cat',  photo:'https://i.ibb.co/k5RYwMm/7.jpg'},
    {name:'toto', age:'4', gender: 'M', hobby: 'eating carrot',  photo:'https://i.ibb.co/zF2WTXZ/DSC-0745.jpg'},
    {name:'timka', age:'3', gender: 'M', hobby: 'singing songs',  photo:'https://i.ibb.co/Ct4BDc0/9.jpg'},
    {name:'bublik', age:'5', gender: 'M', hobby: 'jumping around',  photo:'https://i.ibb.co/q0CmY9h/10.jpg'},
    {name:'pushkin', age:'2', gender: 'M', hobby: 'eating insects',  photo:'https://i.ibb.co/k6xG7tW/13.jpg'},
    {name:'stepan', age:'3', gender: 'M', hobby: 'sleeping belly-up',  photo:'https://i.ibb.co/YDr8yWM/8.jpg'}
];

export const girls = [    
    {name:'aida', age:'1', gender: 'F', hobby: 'hiding from everyone', photo: 'https://i.ibb.co/vJD5hr7/14.jpg'},
    {name:'jemmy', age:'5', gender: 'F', hobby: 'plying with the ball',  photo:'https://i.ibb.co/h15fyc6/2.jpg'},
    {name:'laika', age:'3', gender: 'F', hobby: 'exploring the room',  photo:'https://i.ibb.co/KsyVy3d/11.jpg'},
    {name:'ziza', age:'2', gender: 'F', hobby: 'playing with the carpet',  photo:'https://i.ibb.co/7jN1CSP/4.jpg'},
    {name:'kisa', age:'4', gender: 'F', hobby: 'watching others',  photo:'https://i.ibb.co/HNh4HhJ/5.jpg'},
    {name:'rory', age:'3', gender: 'F', hobby: 'running from everyone',  photo:'https://i.ibb.co/GQDjWnm/12.jpg'}
];





