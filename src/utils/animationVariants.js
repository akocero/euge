export const IntroParentVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			delay: 1,
			staggerChildren: 0.2,
			when: "beforeChildren",
		},
	},
};

export const springRTL = {
	hidden: {
		x: "100vw",
	},
	visible: {
		x: 0,
		transition: {
			duration: 1,
			type: "spring",
		},
	},
};

export const springLTR = {
	hidden: {
		x: -500,
	},
	visible: {
		x: 0,
		transition: {
			duration: 1.5,
			type: "spring",
		},
	},
};

export const slideDown = {
	hidden: {
		y: -20,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: "easeInOut",
		},
	},
};

export const slideUp = {
	hidden: {
		y: 20,
		opacity: 0,
	},
	visible: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.3,
			ease: "easeInOut",
		},
	},
};

export const navParentVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delay: 0.1,
			staggerChildren: 0.1,
			when: "beforeChildren",
		},
	},
};

export const fadeIn = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 0.36,
		transition: {
			duration: 0.3,
			ease: "easeInOut",
		},
	},
};
