import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => {
    if (response.ok) {
      return response.json();
    }

    throw new Error('Failed to load data');
  });
}

export const get5First = () => {
  return getAll().then(goods => {
    return goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
  }); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll().then(goods => {
    return goods.filter(good => good.color === 'red');
  }); // get only red
};
