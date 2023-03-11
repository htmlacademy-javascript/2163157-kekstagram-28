/**
 * Выберет случайный элемент из любого списка
 * @template Item
 * @param {Item[]} list
 * @return {Item}
 */
const pickItemFromList = (list) => {
  const index = Math.floor(Math.random() * list.length);

  return list[index];
};

/**
 * Выберет случайное целое из диапозона
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
const pickIntegerInRange = (min, max) => {
  const value = min + Math.random() * (max - min);

  return Math.round(value);
};

export {pickItemFromList, pickIntegerInRange};
