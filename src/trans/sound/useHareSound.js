// @flow strict

import {useState} from 'preact/hooks';
// $FlowFixMe[untyped-import]
import useSound from 'use-sound';

import soundFile from './vo_chicory.mp3';

const SOUND_SPRITES = {
	'1': [0, 500],
	'2': [1000, 500],
	'3': [2000, 500],
	'4': [3000, 500],
	'5': [4000, 500],
	'6': [5000, 500],
	'7': [6000, 500],
	'8': [7000, 500],
	'9': [8000, 500],
	'10': [9000, 500],
	'11': [10000, 500],
	'12': [11000, 500],
	'13': [12000, 500],
};

const SOUND_SPRITE_KEYS = Object.keys(SOUND_SPRITES);

function shuffleArray(array: Array<string>): Array<string> {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}

	return array;
}

export default function useHareSound(): () => void {
	const [sequence, setSequence] = useState(() =>
		shuffleArray([...SOUND_SPRITE_KEYS])
	);

	const [play] = useSound(soundFile, {
		volume: 1,
		sprite: SOUND_SPRITES,
	});

	return () => {
		const id = sequence[0];
		if (sequence.length <= 1) {
			setSequence(shuffleArray([...SOUND_SPRITE_KEYS]));
		} else {
			setSequence(sequence.slice(1));
		}

		play({id});
	};
}
