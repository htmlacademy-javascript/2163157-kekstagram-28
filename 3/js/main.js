const descriptions = [
  'описание 1',
  'описание 2',
  'описание 3'
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = [
  'Артём',
  'Пётр',
  'Максим',
  'Мария',
  'Дарья',
  'Екатерина'
];

/**
 * @template Item
 * @param {Item[]} list
 * @return {Item}
 */
const pickItemFromList = (list) => {
  const index = Math.floor(Math.random() * list.length);

  return list[index];
};

/**
 * @param {number} min
 * @param {number} max
 * @return {number}
 */
const pickIntegerInRange = (min, max) => {
  const value = min + Math.random() * (max - min);

  return Math.round(value);
};

/**
 * создаст объект фотографии
 * @param {number} id
 * @return {ImageState}
 */
const createImageState = (id) => {
  const url = `photos/${id}.jpg`;
  const description = pickItemFromList(descriptions);
  const likes = pickIntegerInRange(15, 200);
  const comment = createCommentStateList(pickIntegerInRange(0, 25));
  return {id, url, description, likes, comment};
};


/**
 * создаст список объектов фотографий
 * @param {number} length
 * @return {createImageState[]}
 */
const createImageStateList = (length = 25) => {
  const list = new Array(length).fill(1);

  return list.map((start, index) => createImageState(start + index));
};

/**
 * создаст объект комментария
 * @param {number} id
 * @param {CommentState}
 */
const createCommentState = (id) => {
  const avatar = `img/avatar-${pickIntegerInRange(1, 6)}.svg`;
  const message = pickItemFromList(messages);
  const name = pickItemFromList(names);

  return {id, avatar, message, name};
};

/**
 * создаст список комментариев
 * @param {number} length
 * @returns {CommentState[]}
 */
const createCommentStateList = (length) => {
  const list = new Array(length).fill(1);

  return list.map((start, index) => createCommentState(start + index));
};


createImageStateList();
