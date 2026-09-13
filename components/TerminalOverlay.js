import { useState, useEffect, useRef, useCallback } from 'react';
import { FiX } from 'react-icons/fi';

const PROMPT = 'eugene@portfolio:~$';

const COMMANDS = {
	help: {
		description: 'list available commands',
		output: () => [
			{ text: 'Available commands:', type: 'header' },
			{ text: '', type: 'line' },
			{ text: '  whoami       — who is this guy', type: 'line' },
			{ text: '  skills       — full tech stack by category', type: 'line' },
			{ text: '  stack        — quick tag-style stack overview', type: 'line' },
			{ text: '  experience   — work history', type: 'line' },
			{ text: '  education    — how I learned to code', type: 'line' },
			{ text: '  projects     — notable work', type: 'line' },
			{ text: '  services     — what I offer & rates', type: 'line' },
			{ text: '  hired        — how to hire me', type: 'line' },
			{ text: '  socials      — find me online', type: 'line' },
			{ text: '  fun          — random fun fact', type: 'line' },
			{ text: '  contact      — get in touch', type: 'line' },
			{ text: '  clear        — clear the terminal', type: 'line' },
			{ text: '  exit         — close this terminal', type: 'line' },
		],
	},
	whoami: {
		description: 'who is this guy',
		output: () => [
			{ text: 'Eugene Paul Badato', type: 'header' },
			{ text: 'AI & Software Engineer — Manila, Philippines', type: 'line' },
			{ text: '', type: 'line' },
			{ text: 'I build fast, purposeful web experiences and I\'ve fully', type: 'line' },
			{ text: 'integrated AI into how I design, code, and ship.', type: 'line' },
			{ text: '', type: 'line' },
			{ text: 'Creator of PelikulaPH, HxH API, and an automated', type: 'line' },
			{ text: 'monitoring system. Also a dev mentor.', type: 'line' },
			{ text: '', type: 'line' },
			{ text: '→ Open to freelance & remote opportunities.', type: 'accent' },
		],
	},
	skills: {
		description: 'tech stack by category',
		output: () => [
			{ text: 'Tech Stack', type: 'header' },
			{ text: '', type: 'line' },
			{ text: '[frontend]  React · Next.js · TypeScript · JavaScript', type: 'line' },
			{ text: '            Vue.js · Nuxt · SCSS · Tailwind · HTML5', type: 'line' },
			{ text: '            Framer Motion · GSAP · CSS Animations', type: 'line' },
			{ text: '', type: 'line' },
			{ text: '[backend]   Node.js · Express · Laravel · PHP', type: 'line' },
			{ text: '            REST APIs · GraphQL · WebSockets', type: 'line' },
			{ text: '            Nodemailer · JWT · OAuth2', type: 'line' },
			{ text: '', type: 'line' },
			{ text: '[database]  PostgreSQL · MySQL · MongoDB · Redis', type: 'line' },
			{ text: '            Prisma · Eloquent · Mongoose', type: 'line' },
			{ text: '', type: 'line' },
			{ text: '[infra]     Cloudflare Workers · Vercel · Railway', type: 'line' },
			{ text: '            Docker · Linux · Nginx · cPanel', type: 'line' },
			{ text: '            CI/CD · GitHub Actions · PM2', type: 'line' },
			{ text: '', type: 'line' },
			{ text: '[ai]        Claude API · OpenAI · LangChain', type: 'line' },
			{ text: '            Prompt Engineering · RAG · Embeddings', type: 'line' },
			{ text: '            AI-assisted workflows · MCP', type: 'line' },
			{ text: '', type: 'line' },
			{ text: '[cms]       Contentful · Sanity · Strapi', type: 'line' },
			{ text: '            Headless CMS · Markdown · MDX', type: 'line' },
			{ text: '', type: 'line' },
			{ text: '[tools]     Git · GitHub · GitLab · Figma · Postman', type: 'line' },
			{ text: '            VS Code · Claude Code · Notion · Linear', type: 'line' },
			{ text: '            Cloudflare Turnstile · Resend · Twilio', type: 'line' },
		],
	},
	stack: {
		description: 'quick tag-style stack overview',
		output: () => [
			{ text: 'Quick Stack', type: 'header' },
			{ text: '', type: 'line' },
			{ text: '  React  Next.js  Vue  Nuxt  TypeScript  JavaScript', type: 'accent' },
			{ text: '  Node.js  Express  Laravel  PHP  GraphQL  REST', type: 'accent' },
			{ text: '  PostgreSQL  MySQL  MongoDB  Redis  Prisma', type: 'accent' },
			{ text: '  Cloudflare  Vercel  Docker  Linux  Nginx', type: 'accent' },
			{ text: '  Claude API  OpenAI  LangChain  RAG  MCP', type: 'accent' },
			{ text: '  SCSS  Tailwind  Framer Motion  GSAP', type: 'accent' },
			{ text: '  Contentful  Sanity  Strapi  Git  Figma', type: 'accent' },
		],
	},
	experience: {
		description: 'work history',
		output: () => [
			{ text: 'Work History', type: 'header' },
			{ text: '', type: 'line' },
			{ text: '▸ AI & Software Engineer', type: 'line' },
			{ text: '  Freelance / Remote          2022 — Present', type: 'muted' },
			{ text: '  Building web apps & AI-integrated tools for clients', type: 'muted' },
			{ text: '', type: 'line' },
			{ text: '▸ Full-Stack Developer', type: 'line' },
			{ text: '  Various Companies            2019 — 2022', type: 'muted' },
			{ text: '  Laravel, Vue, React, REST APIs, DB design', type: 'muted' },
			{ text: '', type: 'line' },
			{ text: '▸ Dev Mentor', type: 'line' },
			{ text: '  Self-run                     2021 — Present', type: 'muted' },
			{ text: '  Guiding aspiring devs from zero to employed', type: 'muted' },
			{ text: '', type: 'line' },
			{ text: '→ full details at #experiences', type: 'accent' },
		],
	},
	education: {
		description: 'background & how I learned',
		output: () => [
			{ text: 'Education', type: 'header' },
			{ text: '', type: 'line' },
			{ text: '▸ Self-taught Developer', type: 'line' },
			{ text: '  Started coding in 2018 — no CS degree, just grit.', type: 'muted' },
			{ text: '', type: 'line' },
			{ text: '▸ Resources that shaped me:', type: 'line' },
			{ text: '  Laracasts · freeCodeCamp · The Odin Project', type: 'muted' },
			{ text: '  YouTube rabbit holes · Stack Overflow · docs', type: 'muted' },
			{ text: '', type: 'line' },
			{ text: '▸ Currently deep in:', type: 'line' },
			{ text: '  Claude API · AI agent workflows · MCP', type: 'muted' },
			{ text: '', type: 'line' },
			{ text: '"The best devs never stop being students."', type: 'accent' },
		],
	},
	socials: {
		description: 'find me online',
		output: () => [
			{ text: 'Find Me Online', type: 'header' },
			{ text: '', type: 'line' },
			{ text: '  GitHub    → github.com/akocero', type: 'line' },
			{ text: '  GitLab    → gitlab.com/akocero', type: 'line' },
			{ text: '  LinkedIn  → linkedin.com/in/eugenebadato', type: 'line' },
			{ text: '  X         → x.com/eugenebadato', type: 'line' },
			{ text: '  Email     → badatoeugenepaulm@gmail.com', type: 'line' },
			{ text: '', type: 'line' },
			{ text: '→ or just type "contact" to message me directly', type: 'accent' },
		],
	},
	hired: {
		description: 'rates & how to hire me',
		output: () => [
			{ text: 'How to Hire Me', type: 'header' },
			{ text: '', type: 'line' },
			{ text: '  Full-Stack Project   from $800', type: 'line' },
			{ text: '  Dev on Demand        $16 / hr', type: 'line' },
			{ text: '  Landing Page         from $320', type: 'line' },
			{ text: '  API Design           from $480', type: 'line' },
			{ text: '  Performance & SEO    from $160', type: 'line' },
			{ text: '  CMS Integration      from $240', type: 'line' },
			{ text: '', type: 'line' },
			{ text: '  Response time: within 24 hours', type: 'muted' },
			{ text: '  Based in the Philippines (remote-ready)', type: 'muted' },
			{ text: '', type: 'line' },
			{ text: '→ type "contact" to start a conversation', type: 'accent' },
		],
	},
	fun: {
		description: 'random fun fact',
		output: () => {
			const facts = [
				[
					{ text: 'Fun Fact #1', type: 'header' },
					{ text: '', type: 'line' },
					{ text: '  I built a Hunter x Hunter API that strangers', type: 'line' },
					{ text: '  on the internet actually use. No marketing.', type: 'line' },
					{ text: '  Just pushed it and people found it.', type: 'muted' },
				],
				[
					{ text: 'Fun Fact #2', type: 'header' },
					{ text: '', type: 'line' },
					{ text: '  I\'m self-taught. No CS degree.', type: 'line' },
					{ text: '  Just YouTube, docs, and too much coffee.', type: 'muted' },
				],
				[
					{ text: 'Fun Fact #3', type: 'header' },
					{ text: '', type: 'line' },
					{ text: '  I use Claude Code to build with Claude Code.', type: 'line' },
					{ text: '  It\'s turtles all the way down.', type: 'muted' },
				],
				[
					{ text: 'Fun Fact #4', type: 'header' },
					{ text: '', type: 'line' },
					{ text: '  My pixel avatar took longer to find than', type: 'line' },
					{ text: '  some of the features on this site.', type: 'muted' },
				],
				[
					{ text: 'Fun Fact #5', type: 'header' },
					{ text: '', type: 'line' },
					{ text: '  I mentor devs not just to help them —', type: 'line' },
					{ text: '  teaching keeps my own fundamentals sharp.', type: 'muted' },
				],
			];
			const pick = facts[Math.floor(Math.random() * facts.length)];
			return [...pick, { text: '', type: 'line' }, { text: '→ run again for another fact', type: 'accent' }];
		},
	},
	projects: {
		description: 'notable work',
		output: () => [
			{ text: 'Notable Projects', type: 'header' },
			{ text: '', type: 'line' },
			{ text: '1. PelikulaPH       — community movie platform', type: 'line' },
			{ text: '   A social platform for Filipino film enthusiasts.', type: 'muted' },
			{ text: '', type: 'line' },
			{ text: '2. Hunter x Hunter API  — anime REST API', type: 'line' },
			{ text: '   Public API used by anime fans worldwide.', type: 'muted' },
			{ text: '', type: 'line' },
			{ text: '3. Monitoring System    — automated alerting', type: 'line' },
			{ text: '   Real-time automated uptime & alert system.', type: 'muted' },
			{ text: '', type: 'line' },
			{ text: '→ type "contact" to discuss a project', type: 'accent' },
		],
	},
	services: {
		description: 'what I offer',
		output: () => [
			{ text: 'Services', type: 'header' },
			{ text: '', type: 'line' },
			{ text: '• Full-Stack Development   from $800', type: 'line' },
			{ text: '• Dev on Demand            $16 / hr', type: 'line' },
			{ text: '• Landing Pages            from $320', type: 'line' },
			{ text: '• API Design               from $480', type: 'line' },
			{ text: '• Performance & SEO        from $160', type: 'line' },
			{ text: '• CMS Integration          from $240', type: 'line' },
			{ text: '', type: 'line' },
			{ text: '→ type "contact" to get a quote', type: 'accent' },
		],
	},
	contact: {
		description: 'get in touch',
		output: () => [
			{ text: 'Opening contact section...', type: 'accent' },
		],
		action: () => {
			document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
		},
	},
	clear: {
		description: 'clear the terminal',
		output: () => [],
		action: null,
	},
	exit: {
		description: 'close this terminal',
		output: () => [{ text: 'bye.', type: 'muted' }],
		action: null,
	},
};

const WELCOME = [
	{ text: `Eugene's Portfolio Terminal — type 'help' to get started`, type: 'header' },
	{ text: 'Tip: press Ctrl+` to toggle this terminal anytime.', type: 'muted' },
	{ text: '', type: 'line' },
];

export default function TerminalOverlay({ open, onClose }) {
	const [history, setHistory] = useState(WELCOME);
	const [input, setInput] = useState('');
	const [cmdHistory, setCmdHistory] = useState([]);
	const [cmdIndex, setCmdIndex] = useState(-1);
	const inputRef = useRef(null);
	const bottomRef = useRef(null);

	useEffect(() => {
		if (open) {
			setHistory(WELCOME);
			setInput('');
			setTimeout(() => inputRef.current?.focus(), 50);
		}
	}, [open]);

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [history]);

	const runCommand = useCallback((raw) => {
		const cmd = raw.trim().toLowerCase();
		if (!cmd) return;

		setCmdHistory((prev) => [cmd, ...prev]);
		setCmdIndex(-1);

		const entry = COMMANDS[cmd];

		if (cmd === 'clear') {
			setHistory([]);
			return;
		}

		if (cmd === 'exit') {
			setHistory((prev) => [
				...prev,
				{ text: `${PROMPT} ${raw}`, type: 'prompt' },
				{ text: 'bye.', type: 'muted' },
			]);
			setTimeout(onClose, 600);
			return;
		}

		if (!entry) {
			setHistory((prev) => [
				...prev,
				{ text: `${PROMPT} ${raw}`, type: 'prompt' },
				{ text: `command not found: ${cmd}. type 'help' for commands.`, type: 'error' },
			]);
			return;
		}

		const lines = entry.output();
		setHistory((prev) => [
			...prev,
			{ text: `${PROMPT} ${raw}`, type: 'prompt' },
			...lines,
		]);

		if (entry.action) entry.action();
		if (cmd === 'contact') setTimeout(onClose, 800);
	}, [onClose]);

	const handleKey = (e) => {
		if (e.key === 'Enter') {
			runCommand(input);
			setInput('');
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			setCmdIndex((prev) => {
				const next = Math.min(prev + 1, cmdHistory.length - 1);
				setInput(cmdHistory[next] ?? '');
				return next;
			});
		} else if (e.key === 'ArrowDown') {
			e.preventDefault();
			setCmdIndex((prev) => {
				const next = Math.max(prev - 1, -1);
				setInput(next === -1 ? '' : cmdHistory[next] ?? '');
				return next;
			});
		}
	};

	if (!open) return null;

	return (
		<div className="terminal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
			<div className="terminal-overlay__window">
				<div className="terminal-overlay__titlebar">
					<div className="terminal-overlay__dots">
						<span className="terminal-overlay__dot terminal-overlay__dot--red" />
						<span className="terminal-overlay__dot terminal-overlay__dot--yellow" />
						<span className="terminal-overlay__dot terminal-overlay__dot--green" />
					</div>
					<span className="terminal-overlay__title">portfolio — bash</span>
					<button className="terminal-overlay__close" onClick={onClose} aria-label="Close terminal">
						<FiX />
					</button>
				</div>

				<div className="terminal-overlay__body" onClick={() => inputRef.current?.focus()}>
					{history.map((line, i) => (
						<p key={i} className={`terminal-overlay__line terminal-overlay__line--${line.type}`}>
							{line.text}
						</p>
					))}

					<div className="terminal-overlay__input-row">
						<span className="terminal-overlay__line terminal-overlay__line--prompt-label">
							{PROMPT}
						</span>
						<input
							ref={inputRef}
							className="terminal-overlay__input"
							type="text"
							value={input}
							onChange={(e) => setInput(e.target.value)}
							onKeyDown={handleKey}
							autoComplete="off"
							autoCorrect="off"
							spellCheck={false}
						/>
					</div>
					<div ref={bottomRef} />
				</div>
			</div>
		</div>
	);
}
