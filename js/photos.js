import {NAMES} from './data';
import { COMMENTS } from './data';
import { DESCRIPTIONS } from './data';
import { createRandomIdFromRangeGenerator } from './utils';

const createPhoto = () => {

  const randomId = createRandomIdFromRangeGenerator(1,26);
  const randomUrl = createRandomIdFromRangeGenerator(1,25);
  const randomAvatar = createRandomIdFromRangeGenerator(1,25);
  const randomDescription = createRandomIdFromRangeGenerator(0, DESCRIPTIONS.length - 1);
  const randomLike = createRandomIdFromRangeGenerator(15, 200);
  const randomComment = createRandomIdFromRangeGenerator(0, COMMENTS.length - 1);
  const randomName = createRandomIdFromRangeGenerator(0, NAMES.length - 1);

  return {
    id: (randomId()),
    url: `photos/${[(randomUrl())]}.jpg`,
    description: [(randomDescription)()],
    likes: (randomLike()),
    message: {
      id: (randomId()),
      avatar:`img/avatar-${[(randomAvatar)()]}.svg`,
      comment:[(randomComment)()],
      name:[(randomName)()]
    },
  };
};

const newPhotos = Array.from({length: 25}, createPhoto);

// eslint-disable-next-line no-console


export {newPhotos};