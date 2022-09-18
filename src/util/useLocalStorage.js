// @flow strict

import {useCallback, useState} from 'preact/hooks';

export default function useLocalStorage<T>(
	key: string,
	initialValue: T
): [T, (value: () => T) => void] {
	const [storedValue, setStoredValue] = useState<T>(() => {
		if (typeof window === 'undefined') {
			return initialValue;
		}

		try {
			const item = window.localStorage.getItem(key);

			return item ? JSON.parse(item) : initialValue;
		} catch (ex) {
			console.error(ex);
			return initialValue;
		}
	});

	const setValue = useCallback(
		(value: () => T) => {
			try {
				const valueToStore = typeof value === 'function' ? value() : value;

				setStoredValue(valueToStore);

				if (typeof window !== 'undefined') {
					window.localStorage.setItem(key, JSON.stringify(valueToStore));
				}
			} catch (ex) {
				console.error(ex);
			}
		},
		[key]
	);

	return [storedValue, setValue];
}
