// @flow strict

import {useCallback} from 'preact/hooks';

import useLocalStorage from '../util/useLocalStorage';

import PageBackground from './PageBackground';
import useHareSound from './sound/useHareSound';
import styles from './TransApp.module.css';

export default function TransApp(): React$MixedElement {
	const [clickCount, setNewClickCount] = useLocalStorage('click_count', 0);

	const playHareSound = useHareSound();

	const onHareClick = useCallback(() => {
		setNewClickCount(() => {
			return clickCount + 1;
		});

		console.log('You clicked Chicory ' + (clickCount + 1) + ' times!');

		playHareSound();
	}, [clickCount, playHareSound, setNewClickCount]);

	return (
		<>
			<div className={styles.app}>
				<button
					aria-label="Trans Chicory"
					className={styles.hare}
					onClick={onHareClick}
					style={{
						'--hover-scale': 1.1 + clickCount * 0.01,
						'--normal-scale': 1 + clickCount * 0.01,
						'--active-scale': 0.9 + clickCount * 0.01,
					}}
					type="button"
				/>
			</div>

			<PageBackground />
		</>
	);
}
