import { useRef, useEffect } from 'react';

function useDocumentTitle(title, retainOnUnmount = false) {
	const defaultTitle = useRef(document.title);
	console.log(defaultTitle);

	useEffect(() => {
		document.title = title;
	}, [title]);

	useEffect(() => {
		return () => {
			if (!retainOnUnmount) {
				document.title = defaultTitle.current;
			}
		};
	}, []);
}

export default useDocumentTitle;