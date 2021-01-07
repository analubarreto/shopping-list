import { writable } from 'svelte/store'

const fruits = writable([
  {
    id: 'fruit1',
    fruitName: 'Avocado',
    fruitPrice: 5,
    unit: 'unit',
    isOrganic: true,
    imgUrl: '../../assets/images/avocado.png',
  },
  {
    id: 'fruit2',
    fruitName: 'Red Apple',
    fruitPrice: 3,
    unit: 'kg',
    isOrganic: false,
    imgUrl: '../../assets/images/apples.png',
  },
  {
    id: 'fruit3',
    fruitName: 'Green Apple',
    fruitPrice: 16,
    unit: 'kg',
    isOrganic: true,
    imgUrl: '../../assets/images/green-apple.png',
  },
  {
    id: 'fruit4',
    fruitName: 'Pineapple',
    fruitPrice: 2,
    unit: 'unit',
    isOrganic: false,
    imgUrl: '../../assets/images/pineapples.png',
  },
  {
    id: 'fruit5',
    fruitName: 'Blue Berry',
    fruitPrice: 12,
    unit: 'kg',
    isOrganic: true,
    imgUrl: '../../assets/images/blueberry.png',
  },
  {
    id: 'fruit6',
    fruitName: 'Cherry',
    fruitPrice: 10,
    unit: 'box',
    isOrganic: true,
    imgUrl: '../../assets/images/cherry.png',
  },
  {
    id: 'fruit7',
    fruitName: 'Banana',
    fruitPrice: 2,
    unit: 'kg',
    isOrganic: false,
    imgUrl: '../../assets/images/banana.png',
  },
  {
    id: 'fruit8',
    fruitName: 'Green Grapes',
    fruitPrice: 7,
    unit: 'box',
    isOrganic: false,
    imgUrl: '../../assets/images/green-grapes.png',
  },
  {
    id: 'fruit9',
    fruitName: 'Orange',
    fruitPrice: 8,
    unit: 'kg',
    isOrganic: true,
    imgUrl: '../../assets/images/orange.png'
  },
]);

const customProductStore = {
  subscribe: fruits.subscribe,
  toggleOrganic: id => {
    fruits.update(items => {
      const updatedProcut = { ...items.find(f => f.id === id) }

      updatedProcut.isOrganic = !updatedProcut.isOrganic;

      const productIndex = items.findIndex(p => p.id === id);
      const updatedProduct = [...items];

      updatedProcut[productIndex] = updatedProcut;
      return updatedProduct;
    })
  }
}

export default customProductStore;