import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const useScrollReveal = (rootMargin) => {
	const { ref, inView } = useInView({
		triggerOnce: true,
		root: null,
		rootMargin: `${rootMargin}px 0px`,
	});
	const animation = useAnimation();

	useEffect(() => {
		inView ? animation.start('visible') : animation.start('hidden');
	}, [inView, animation]);

	return [ref, animation];
};

export default useScrollReveal;
