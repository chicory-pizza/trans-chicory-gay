// @flow strict

import {useCallback, useState} from 'react';

import styles from './TransApp.module.css';

export default function TransApp(): React$MixedElement {
	const [clickCount, setClickCount] = useState(0);

	const onHareClick = useCallback(() => {
		setClickCount((clickCount) => {
			return clickCount + 1;
		});
	}, []);

	return (
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
	);
}
