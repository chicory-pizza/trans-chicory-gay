// @flow strict

// https://css-tricks.com/using-requestanimationframe-with-react-hooks/

import {useCallback, useEffect, useRef} from 'preact/hooks';

export default function useAnimationFrame(
	callback: (deltaTime: number) => mixed
) {
	const requestRef = useRef();
	const previousTimeRef = useRef();

	const animate = useCallback(
		(time) => {
			if (previousTimeRef.current != null) {
				const deltaTime = time - previousTimeRef.current;
				callback(deltaTime);
			}

			previousTimeRef.current = time;
			requestRef.current = requestAnimationFrame(animate);
		},
		[callback]
	);

	useEffect(() => {
		requestRef.current = requestAnimationFrame(animate);

		return () => {
			if (requestRef.current != null) {
				cancelAnimationFrame(requestRef.current);
			}
		};
	}, [animate]);
}
