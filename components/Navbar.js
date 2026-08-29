import Link from 'next/link';
import { RiSunLine, RiMoonClearLine, RiRobot2Line } from 'react-icons/ri';
import { FiGithub, FiLinkedin, FiTwitter, FiGitlab, FiHome, FiStar, FiFolder, FiBriefcase, FiUser, FiMail, FiZap, FiX } from 'react-icons/fi';
import { SiNextdotjs } from 'react-icons/si';
import { useState, useEffect, useRef } from 'react';
import { slideDown, navParentVariants } from '../src/utils/animationVariants';
import { motion } from 'framer-motion';

function pick(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}

// ── Intro ────────────────────────────────────────────────────────
const INTROS = [
	"before i answer, let me tell you what i already know about you.",
	"funny thing — your browser told me everything before you even said hello.",
	"you didn't have to introduce yourself. your browser already did.",
	"i knew you were coming. well, not you specifically, but close enough.",
	"here is what your browser quietly shared the moment you opened this site.",
];

// ── IP ───────────────────────────────────────────────────────────
const IP_LINES = (ip) => [
	`your public ip address is ${ip}.`,
	`i can see you. your ip? ${ip}.`,
	`ip address: ${ip}. not exactly a secret.`,
	`that's ${ip}, in case you forgot your own address.`,
	`oh look — ${ip}. that's you.`,
];
const IP_SUGGESTIONS = [
	"next time use a vpn — i won't be able to see that.",
	"your isp can see this too, not just me. a vpn would help.",
	"that ip is basically your home address on the internet.",
	"every website you visit knows this. not just me.",
	"fun fact: with just that ip, anyone can estimate your location.",
];

// ── Browser ──────────────────────────────────────────────────────
const BROWSER_LINES = (browser) => [
	`you are using ${browser}.`,
	`${browser}. interesting choice.`,
	`browser: ${browser}. noted.`,
	`you opened this with ${browser}, by the way.`,
	`that's ${browser} you're running.`,
];
const BROWSER_SUGGESTIONS = (browser) => {
	const b = browser.toLowerCase();
	if (b.includes('chrome')) return [
		"try brave — youtube won't have ads and it's built on the same engine.",
		"chrome sends a lot back to google. brave or firefox are cleaner.",
		"just saying — brave exists and blocks ads by default. no extensions needed.",
		"chrome is fine, but it's basically google watching you browse.",
		"switching to brave takes 5 minutes. no more youtube ads. ever.",
	];
	if (b.includes('firefox')) return [
		"firefox. respect. one of the few browsers that actually cares about you.",
		"firefox user detected. you clearly know what you're doing.",
		"solid choice. mozilla is one of the few that fights for your privacy.",
		"a firefox user visiting my portfolio — i like you already.",
		"mozilla would be proud. keep using it.",
	];
	if (b.includes('safari')) return [
		"safari — at least apple puts up a fight for privacy.",
		"safari has decent tracking protection but try firefox for more control.",
		"apple's browser. clean, but limited on extensions.",
		"safari blocks a lot of trackers by default. decent choice.",
		"ios safari is fine. mac safari? try arc if you want something better.",
	];
	if (b.includes('edge')) return [
		"microsoft edge. it's not internet explorer, i'll give you that.",
		"edge is actually decent now but it still sends telemetry to microsoft.",
		"edge user. bold. at least it's chromium-based now.",
		"try brave if you want edge's performance without the microsoft data collection.",
		"edge has come a long way. still, brave does it better.",
	];
	return [
		"unconventional browser. i respect the choice.",
		"not chrome, not firefox. a person of culture.",
		"whatever you're using, it still told me everything.",
		"at least it's not internet explorer.",
		"interesting pick. you must know something others don't.",
	];
};

// ── Device ───────────────────────────────────────────────────────
const DEVICE_LINES = (device) => [
	`you are on ${device}.`,
	`and you're browsing from ${device}.`,
	`device: ${device}.`,
	`looks like ${device} to me.`,
	`${device} detected.`,
];
const DEVICE_SUGGESTIONS = (device) => {
	if (device.includes('mobile')) return [
		"browsing a dev portfolio on mobile. bold move.",
		"this site looks better on desktop — just saying.",
		"mobile user detected. hope the sidebar isn't in your way.",
		"on your phone huh. the sidebar collapses on mobile btw.",
		"mobile browsing. your attention span is impressive.",
	];
	if (device.includes('tablet')) return [
		"tablet user. the rare middle ground.",
		"tablets are an interesting choice for portfolio browsing.",
		"a tablet. not quite mobile, not quite desktop. i see you.",
		"tablet detected. landscape mode recommended.",
		"on a tablet — this site was designed with you in mind too.",
	];
	return [
		"desktop user. the way this site was meant to be seen.",
		"good — you can see the full sidebar properly.",
		"desktop browsing. you probably have 20 other tabs open too.",
		"desktop detected. you're experiencing this the right way.",
		"proper screen real estate. i appreciate that.",
	];
};

// ── Location ─────────────────────────────────────────────────────
const LOCATION_LINES = (city, country) => [
	`you are browsing from ${city}, ${country}.`,
	`location: ${city}, ${country}. nice place.`,
	`${city}, ${country}. noted.`,
	`you're visiting from ${city}, ${country}.`,
	`currently in ${city}, ${country}, huh.`,
];
const LOCATION_SUGGESTIONS = (country) => [
	`fun fact: your isp in ${country} logs every site you visit.`,
	"a vpn would've hidden that. just so you know.",
	"your location isn't really a secret to any server you connect to.",
	"every website you visit sees this. not just me.",
	"i didn't even have to try — your browser just handed it to me.",
];

// ── Extra data ───────────────────────────────────────────────────
const TIMEZONE_LINES = (tz) => [
	`you're in the ${tz} timezone.`,
	`timezone: ${tz}. i know what time it is for you.`,
	`it's whatever time it is in ${tz} right now.`,
	`${tz}. not sleeping? or is it daytime there?`,
	`your clock is set to ${tz}.`,
];

const SCREEN_LINES = (res, scheme) => [
	`your screen is ${res} and you prefer ${scheme}.`,
	`${res} resolution, ${scheme}. classic.`,
	`i can see you're on a ${res} screen in ${scheme}.`,
	`${scheme} user with a ${res} display. makes sense.`,
	`${res} — ${scheme}. your browser told me that too.`,
];

// ── Transition ───────────────────────────────────────────────────
const TRANSITION_LINES = (question) => [
	`anyway, about your question — "${question}"`,
	`right. so you wanted to know — "${question}"`,
	`now back to what you actually asked: "${question}"`,
	`oh yes. you typed: "${question}"`,
	`so. "${question}". you really asked that.`,
];

// ── Roasts ───────────────────────────────────────────────────────
const ROASTS = [
	"bold of you to think i'd spend tokens on that. have you tried google? it's free.",
	"i detected your question. i also detected it wasn't worth answering. chatgpt is that way →",
	"wow. you traveled all the way here to ask me that? google.com. you're welcome.",
	"my token budget says no. my dignity says absolutely not. try chatgpt.",
	"i've analyzed your question and concluded: not my problem. google exists for a reason.",
	"error 418: i'm a portfolio, not your personal assistant. ask chatgpt.",
];

function sleep(ms) {
	return new Promise((r) => setTimeout(r, ms));
}

async function fetchVisitorInfo() {
	try {
		const res = await fetch('https://ipapi.co/json/');
		const data = await res.json();
		return { ip: data.ip, city: data.city, region: data.region, country: data.country_name, org: data.org };
	} catch {
		return null;
	}
}

function getBrowserName() {
	if (typeof navigator === 'undefined') return 'your browser';
	const ua = navigator.userAgent;
	if (ua.includes('Edg/')) return 'Microsoft Edge';
	if (ua.includes('OPR/') || ua.includes('Opera')) return 'Opera';
	if (ua.includes('Chrome/')) return 'Google Chrome';
	if (ua.includes('Firefox/')) return 'Mozilla Firefox';
	if (ua.includes('Safari/') && !ua.includes('Chrome')) return 'Safari';
	return 'your browser';
}

function getDeviceType() {
	if (typeof navigator === 'undefined') return 'a desktop';
	const ua = navigator.userAgent;
	if (/Mobi|Android/i.test(ua)) return 'a mobile device';
	if (/iPad|Tablet/i.test(ua)) return 'a tablet';
	return 'a desktop';
}

const FADE_OUT_MS = 350;

function readingTime(text, msPerWord = 450, minMs = 2400) {
	const words = text.trim().split(/\s+/).length;
	return Math.max(minMs, words * msPerWord);
}

const Navbar = () => {
	const [isDark, setIsDark] = useState('');
	let darkMode = '';

	const [lastScroll, setLastScroll] = useState(0);
	const [scrollState, setScrollState] = useState('');
	const [activeSection, setActiveSection] = useState('home');

	// chat overlay state
	const [chatOpen, setChatOpen] = useState(false);
	const [phase, setPhase] = useState('input'); // 'input' | 'reveal' | 'done'
	const [chatInput, setChatInput] = useState('');
	const [currentLine, setCurrentLine] = useState(null); // { text, type }
	const [lineVisible, setLineVisible] = useState(false);

	const navbarItems = [
		{ href: '#home', label: 'home', icon: <FiHome /> },
		{ href: '#featured', label: 'featured', icon: <FiStar /> },
		{ href: '#projects', label: 'projects', icon: <FiFolder /> },
		{ href: '#experiences', label: 'experiences', icon: <FiBriefcase /> },
		{ href: '#services', label: 'services', icon: <FiZap /> },
		{ href: '#about', label: 'about', icon: <FiUser /> },
		{ href: '#contact', label: 'contact', icon: <FiMail /> },
	];

	useEffect(() => {
		darkMode = localStorage.getItem('darkmode');
		darkMode == 'dark' ? enableDarkMode() : disableDarkMode();
	}, []);

	useEffect(() => {
		const onScroll = () => {
			const currentScroll = window.pageYOffset;
			if (currentScroll > lastScroll) setScrollState('scroll-down');
			if (currentScroll < lastScroll) setScrollState('scroll-up');
			if (currentScroll <= 0) setScrollState('');
			setLastScroll(currentScroll);
		};
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, [scrollState, lastScroll]);

	useEffect(() => {
		const sectionIds = navbarItems.map((item) => item.href.replace('#', ''));
		const observers = [];
		sectionIds.forEach((id) => {
			const el = document.getElementById(id);
			if (!el) return;
			const observer = new IntersectionObserver(
				([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
				{ threshold: 0.3 }
			);
			observer.observe(el);
			observers.push(observer);
		});
		return () => observers.forEach((o) => o.disconnect());
	}, []);

	useEffect(() => {
		const onKey = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
				e.preventDefault();
				setChatOpen((v) => !v);
			}
			if (e.key === 'Escape') handleClose();
		};
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [chatOpen]);

	function handleClose() {
		setChatOpen(false);
		setPhase('input');
		setCurrentLine(null);
		setLineVisible(false);
		setChatInput('');
	}

	async function showLine(text, type, holdMs = 2200) {
		setCurrentLine({ text, type });
		setLineVisible(true);
		await sleep(holdMs);
		setLineVisible(false);
		await sleep(FADE_OUT_MS);
	}

	async function startReveal(question) {
		setPhase('reveal');

		const [visitor] = await Promise.all([fetchVisitorInfo(), sleep(300)]);
		const browser = getBrowserName();
		const device = getDeviceType();

		const timezone = typeof Intl !== 'undefined'
			? Intl.DateTimeFormat().resolvedOptions().timeZone
			: 'unknown';
		const screenRes = typeof window !== 'undefined'
			? `${window.screen.width}×${window.screen.height}`
			: 'unknown';
		const colorScheme = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark mode'
			: 'light mode';

		const show = async (text, type = 'text') =>
			showLine(text, type, readingTime(text));

		await show(pick(INTROS));

		const ipLine = pick(IP_LINES(visitor?.ip ?? 'unknown'));
		await show(ipLine);
		await show(pick(IP_SUGGESTIONS), 'suggestion');

		const browserLine = pick(BROWSER_LINES(browser));
		await show(browserLine);
		await show(pick(BROWSER_SUGGESTIONS(browser)), 'suggestion');

		const deviceLine = pick(DEVICE_LINES(device));
		await show(deviceLine);
		await show(pick(DEVICE_SUGGESTIONS(device)), 'suggestion');

		if (visitor?.city) {
			const locationLine = pick(LOCATION_LINES(visitor.city, visitor.country));
			await show(locationLine);
			await show(pick(LOCATION_SUGGESTIONS(visitor.country)), 'suggestion');
		}

		await show(pick(TIMEZONE_LINES(timezone)));
		await show(pick(SCREEN_LINES(screenRes, colorScheme)));
		await show(pick(TRANSITION_LINES(question)));

		// final roast — stays visible
		setCurrentLine({ text: pick(ROASTS), type: 'text' });
		setLineVisible(true);
		setPhase('done');
	}

	function handleChatSend() {
		const question = chatInput.trim();
		if (!question || phase === 'reveal') return;
		setChatInput('');
		startReveal(question);
	}

	function handleChatKey(e) {
		if (e.key === 'Enter') {
			e.preventDefault();
			handleChatSend();
		}
	}

	const enableDarkMode = () => {
		document.body.classList.add('dark');
		const body = document.querySelector('.dark');
		body.setAttribute('class', 'dark');
		localStorage.setItem('darkmode', 'dark');
		setIsDark('dark');
	};

	const disableDarkMode = () => {
		document.body.classList.add('light');
		const body = document.querySelector('.light');
		body.setAttribute('class', 'light');
		localStorage.setItem('darkmode', 'light');
		setIsDark('light');
	};

	return (
		<>
		<header className={`navbar ${scrollState}`}>
			<motion.div
				className="navbar__container"
				variants={navParentVariants}
				initial="hidden"
				animate="visible"
			>
				<motion.div className="navbar__name" variants={slideDown}>
					<Link href="/">Eugene Paul Badato</Link>
					<p className="navbar__tagline">AI &amp; Software Engineer</p>
					<div className="navbar__controls">
						<div className="navbar__theme-toggle">
							<button
								className={`navbar__theme-btn${isDark !== 'dark' ? ' active' : ''}`}
								onClick={disableDarkMode}
								aria-label="Light mode"
							>
								<RiSunLine />
							</button>
							<button
								className={`navbar__theme-btn${isDark === 'dark' ? ' active' : ''}`}
								onClick={enableDarkMode}
								aria-label="Dark mode"
							>
								<RiMoonClearLine />
							</button>
						</div>
						<button
							className="navbar__chat-btn"
							onClick={() => setChatOpen(true)}
							aria-label="Open AI chat"
						>
							<RiRobot2Line className="navbar__chat-icon" />
							<span>Ask my AI</span>
						</button>
					</div>
				</motion.div>
				<motion.div className="navbar__divider" variants={slideDown} />
				<nav className="navbar__nav">
					<ul className="navbar__nav-list">
						{navbarItems.map((item) => (
							<motion.li
								className="navbar__item"
								variants={slideDown}
								key={item.href}
							>
								<Link
									href={item.href}
									className={`navbar__link${activeSection === item.href.replace('#', '') ? ' active' : ''}`}
								>
									<span className="navbar__link-icon">{item.icon}</span>
									<span className="navbar__link-label">{item.label}</span>
								</Link>
							</motion.li>
						))}
					</ul>
				</nav>
				<div className="navbar__mobile-toggle">
					<button
						className={`navbar__theme-btn${isDark !== 'dark' ? ' active' : ''}`}
						onClick={disableDarkMode}
						aria-label="Light mode"
					>
						<RiSunLine />
					</button>
					<button
						className={`navbar__theme-btn${isDark === 'dark' ? ' active' : ''}`}
						onClick={enableDarkMode}
						aria-label="Dark mode"
					>
						<RiMoonClearLine />
					</button>
				</div>

				<motion.div className="navbar__bottom" variants={slideDown}>
					<div className="navbar__socials">
						<Link href="https://github.com/akocero" target="__blank" className="navbar__social-link"><FiGithub /></Link>
						<Link href="https://gitlab.com/akocero" target="__blank" className="navbar__social-link"><FiGitlab /></Link>
						<Link href="https://www.linkedin.com/in/eugenebadato/" target="__blank" className="navbar__social-link"><FiLinkedin /></Link>
						<Link href="https://twitter.com/eugenebadato" target="__blank" className="navbar__social-link"><FiTwitter /></Link>
					</div>
					<p className="navbar__available">Available for freelance &amp; professional services.</p>
					<Link href="mailto:badatoeugenepaulm@gmail.com" className="navbar__email">
						badatoeugenepaulm@gmail.com
					</Link>
					<div className="navbar__bottom-divider" />
					<p className="navbar__credit">
						Built with <SiNextdotjs /> by Eugene
					</p>
				</motion.div>
			</motion.div>
		</header>

		{chatOpen && (
			<div className="chat-overlay">
				<button className="chat-overlay__close" onClick={handleClose} aria-label="Close">
					<FiX />
				</button>

				<div className="chat-overlay__content">
					{phase === 'input' ? (
						<div className="chat-overlay__input-wrap">
							<p className="chat-overlay__greeting">ask me anything.</p>
							<p className="chat-overlay__prompt">i can answer all your questions.</p>
							<input
								className="chat-overlay__input"
								type="text"
								placeholder="what do you want to ask?"
								value={chatInput}
								onChange={(e) => setChatInput(e.target.value)}
								onKeyDown={handleChatKey}
								autoFocus
							/>
						</div>
					) : (
						<div className="chat-overlay__stage">
							{currentLine && (
								<p className={`chat-overlay__text${currentLine.type === 'suggestion' ? ' chat-overlay__text--suggestion' : ''}${lineVisible ? ' visible' : ''}`}>
									{currentLine.text}
								</p>
							)}
							{phase === 'done' && (
								<button className="chat-overlay__dismiss" onClick={handleClose}>
									[ close ]
								</button>
							)}
						</div>
					)}
				</div>
			</div>
		)}
		</>
	);
};

export default Navbar;
