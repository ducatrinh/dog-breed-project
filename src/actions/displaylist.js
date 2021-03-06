import * as request from "superagent";
import {getImage} from './displayImages'

export const GET_DOGS = "GET_DOGS";
export const CREATE_QUESTION_GAME_1 = "CREATE_QUESTION_GAME_1";
export const RENDER = "RENDER";

function createQuestionGame1(dogbreeds, correctAnswer, dogImages) {
  return {
    type: CREATE_QUESTION_GAME_1,
    payload: { dogbreeds, correctAnswer, dogImages}
  };
}

function showList(dogs) {
  return {
    type: GET_DOGS,
    payload: dogs
  };
}

function getRandomDogName(dogsArray) {
  return dogsArray[Math.floor(Math.random() * dogsArray.length)];
}

function arrayCheck(array, randomDog) {
  return array.find(dog => dog === randomDog);
}

export function makeArrayOfRandomDogs(numberOfDogs, dogsArray) {
  const array = [];

  for (let i = 0; i < numberOfDogs; i++) {
    let randomDog = getRandomDogName(dogsArray);
    while (arrayCheck(array, randomDog))
      randomDog = getRandomDogName(dogsArray);
    array.push(randomDog);
  }

  return array;
}

export function getDogs() {
  return function(dispatch) {
    request("https://dog.ceo/api/breeds/list/all")
    .then(response => {
      const dogbreeds = Object.keys(response.body.message);
      dispatch(showList(dogbreeds));
    });
  };
}

export function getRandomDogs() {
  return async function(dispatch) {
      const response = await request("https://dog.ceo/api/breeds/list/all")
      const dogbreeds = await Object.keys(response.body.message);
      const randomDogs = makeArrayOfRandomDogs(3, dogbreeds);
      const randombreed = getRandomDogName(randomDogs);
      const image = await getImage(randombreed)
      dispatch(createQuestionGame1(randomDogs, randombreed, image));
    };
}
