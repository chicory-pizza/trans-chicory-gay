// @flow strict

import {useCallback, useState} from 'react';

import useAnimationFrame from '../util/useAnimationFrame';

import styles from './PageBackground.module.css';

export default function PageBackground(): React$MixedElement {
	const [rotate, setRotate] = useState(0);

	const callback = useCallback((deltaTime) => {
		setRotate((prevRotate) => {
			return (prevRotate + (360 / 30000) * deltaTime) % 360;
		});
	}, []);

	useAnimationFrame(callback);

	return (
		<div
			className={styles.bg}
			style={{
				'--deg': rotate + 'deg',
			}}
		/>
	);
}
