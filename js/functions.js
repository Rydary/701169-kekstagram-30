// Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true,
// если строка меньше или равна указанной длине, и false, если строка длиннее.

// function checkMaxLenghtLine (line, maxAmount) {
//   const symbolsAmount = line.length;
//   return (symbolsAmount >= maxAmount);
// }

// checkMaxLenghtLine ('Hello World!', 5);

// //Функция для проверки, является ли строка палиндромом.
// function checkPalindrom (line) {
//   const newLine = line.toLowerCase();
//   let emptyLine = '';
//   // eslint-disable-next-line for-direction
//   for (let i = newLine.length - 1; i <= 0; i--) {
//     emptyLine += newLine[i];
//     return emptyLine;
//   }
//   const result = (newLine === emptyLine);

//   // eslint-disable-next-line no-console
//   console.log(result);
// }

// checkPalindrom ('топот');

//id, число — идентификатор опубликованной фотографии. Это число от 1 до 25
//url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25.
//description, строка — описание фотографии. Описание придумайте самостоятельно.
//likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200
//comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии — случайное число от 0 до 30. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:
//{
//   id: 135,
//   avatar: 'img/avatar-6.svg',
//   message: 'В целом всё неплохо. Но не всё.',
//   name: 'Артём',
// }

// Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:


const NAMES = [
  'Елизавета',
  'Маруся',
  'Евграф',
  'Родион',
  'Микеле',
  'Николай Носков',
  'Цезарь'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Мой ужин на закате',
  'Люблю гулять по полю утром!',
  'Не придумала описание, просто фото',
  'Вау! Вы такого точно не видели!',
  'Грегор Замза проснулся у себя в комнате.',
  'Ну и денек!'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createPhoto = () => {

  const randomId = getRandomInteger(1,25);
  const randomAvatar = getRandomInteger(1,25);
  const randomDescription = getRandomInteger(0, DESCRIPTIONS.length - 1);
  const randomLike = getRandomInteger(15, 200);
  const randomMessage = getRandomInteger(0, MESSAGES.length - 1);
  const randomName = getRandomInteger(0, NAMES.length - 1);

  return {
    id: randomId,
    avatar:`photos/${[randomAvatar]}.jpg`,
    description: DESCRIPTIONS[randomDescription],
    like: randomLike,
    message: MESSAGES[randomMessage],
    name: NAMES[randomName]
  };
};

createPhoto();

