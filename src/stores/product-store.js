import { writable } from 'svelte/store'

function createProducts() {
  const fruits = writable([
    {
      id: 'fruit1',
      fruitName: 'Avocado',
      fruitPrice: 5,
      unit: 'unit',
    },
    {
      id: 'fruit2',
      fruitName: 'Red Apple',
      fruitPrice: 3,
      unit: 'kg',
    },
    {
      id: 'fruit3',
      fruitName: 'Green Apple',
      fruitPrice: 16,
      unit: 'kg',
    },
    {
      id: 'fruit4',
      fruitName: 'Pineapple',
      fruitPrice: 2,
      unit: 'unit',
    },
    {
      id: 'fruit5',
      fruitName: 'Blue Berry',
      fruitPrice: 12,
      unit: 'kg',
    },
    {
      id: 'fruit6',
      fruitName: 'Cherry',
      fruitPrice: 10,
      unit: 'box',
    },
    {
      id: 'fruit7',
      fruitName: 'Banana',
      fruitPrice: 2,
      unit: 'kg',
    },
    {
      id: 'fruit8',
      fruitName: 'Green Grapes',
      fruitPrice: 7,
      unit: 'box',
    },
    {
      id: 'fruit9',
      fruitName: 'Orange',
      fruitPrice: 8,
      unit: 'kg',
    },
  ])

  return {
    subscribe: fruits.subscribe
  }
}

export default createProducts