const POSTS_QUANTITY = 25;
const COMMENTATORS_QUANTITY = 6;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MAX_COMMENT_QUANTITY = 30;
const MAX_COMMENT_ID_QUANTITY = 20000;

const PHOTOS_DESCRIPTIONS = ['Чудесно провели время!',
	'Незабываемый день!',
	'Обязательно встретимся снова)',
	'Море впечатлений~~~',
	'Жизнь прекрасна!',
	'Отлично отдохнули',
	'Ищем красоту везде!'];

const COMMENT_MESSAGES = ['Всё отлично!',
	'В целом всё неплохо. Но не всё.',
	'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.',
	'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
	'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
	'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];

const NAMES = ['Илья',
	'Артём',
	'Ирина',
	'Наталья',
	'Олег',
	'Роман',
	'Анастасия',
	'Вера',
	'Борис',
	'Аркадий',
	'Галина',
	'Маргарита',
	'Николай',
	'Никита',
	'Ольга',
	'Алина',
	'Арсен',
	'Виталий',
	'Юлия'];

const getRandomInteger = (a, b) => {
	const lower = Math.ceil(Math.min(a, b));
	const upper = Math.floor(Math.max(a, b));
	const result = Math.random() * (upper - lower + 1) + lower;
	return Math.floor(result);
};

const getUniqueRandomInteger = (min, max) => {
	const previousValues = [];

	return function () {
		let currentValue = getRandomInteger(min, max);
		if (previousValues.length >= (max - min + 1)) {
			return null;
		}
		while (previousValues.includes(currentValue)) {
			currentValue = getRandomInteger(min, max);
		}
		previousValues.push(currentValue);
		return currentValue;
	};
};

const uniquePhotoId = getUniqueRandomInteger(1, POSTS_QUANTITY);
const uniquePhotoUrl = getUniqueRandomInteger(1, POSTS_QUANTITY);
const uniqueCommentId = getUniqueRandomInteger(1, MAX_COMMENT_ID_QUANTITY);

const createPhotoPost = () => {
	const randomId = uniquePhotoId();
	const randomUrl = uniquePhotoUrl();
	const randomDescription = PHOTOS_DESCRIPTIONS[getRandomInteger(0, PHOTOS_DESCRIPTIONS.length - 1)];
	const randomLikes = getRandomInteger(MIN_LIKES, MAX_LIKES);
	const commentQuantity = getRandomInteger(0, MAX_COMMENT_QUANTITY);

	const createComments = () => {
		const randomCommentId = uniqueCommentId();
		const commentAvatarUrl = `img/avatar-${getRandomInteger(1, COMMENTATORS_QUANTITY)}.svg`;
		const commentMessage = `${COMMENT_MESSAGES[getRandomInteger(0, COMMENT_MESSAGES.length - 1)]} ${COMMENT_MESSAGES[getRandomInteger(0, COMMENT_MESSAGES.length - 1)]}`;
		const commentName = NAMES[getRandomInteger(0, NAMES.length - 1)];

		return {
			id: randomCommentId,
			avatar: commentAvatarUrl,
			message: commentMessage,
			name: commentName,
		};
	};

	return {
		id: randomId,
		url: randomUrl,
		description: randomDescription,
		likes: randomLikes,
		comments: Array.from({ length: commentQuantity }, createComments),
	};
};


const pubishedPhotos = Array.from({ length: POSTS_QUANTITY }, createPhotoPost);

console.log(pubishedPhotos);

