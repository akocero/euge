import { useState, useEffect, useRef } from 'react';
import { FiMessageSquare, FiX, FiSend } from 'react-icons/fi';

const ROAST_MESSAGES = [
	"Bold of you to think I'd spend tokens on that. Have you tried Google? It's free.",
	"I detected your question. I also detected it wasn't worth answering. ChatGPT is that way →",
	"Wow. You traveled all the way here to ask me that? Google.com. You're welcome.",
	"My token budget says no. My dignity says absolutely not. Try ChatGPT.",
	"I've analyzed your question and concluded: not my problem. Google exists for a reason.",
	"Error 418: I'm a portfolio, not your personal assistant. Ask ChatGPT.",
];

function randomRoast() {
	return ROAST_MESSAGES[Math.floor(Math.random() * ROAST_MESSAGES.length)];
}

function sleep(ms) {
	return new Promise((r) => setTimeout(r, ms));
}

async function fetchVisitorInfo() {
	try {
		const res = await fetch('https://ipwho.is/');
		const data = await res.json();
		if (!data.success) return null;
		return {
			ip: data.ip,
			city: data.city,
			region: data.region,
			country: data.country,
			isp: data.connection?.isp || data.connection?.org || null,
		};
	} catch {
		return null;
	}
}

export default function ChatWidget() {
	const [open, setOpen] = useState(false);
	const [input, setInput] = useState('');
	const [messages, setMessages] = useState([
		{ role: 'bot', text: "Hey. You found the chat. Ask me anything — I dare you." },
	]);
	const [loading, setLoading] = useState(false);
	const bottomRef = useRef(null);

	useEffect(() => {
		bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
	}, [messages, loading]);

	// close on backdrop click
	function handleBackdropClick(e) {
		if (e.target === e.currentTarget) setOpen(false);
	}

	// close on Escape
	useEffect(() => {
		if (!open) return;
		const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
		window.addEventListener('keydown', onKey);
		return () => window.removeEventListener('keydown', onKey);
	}, [open]);

	function addMessage(msg) {
		setMessages((prev) => [...prev, msg]);
	}

	async function handleSend() {
		const question = input.trim();
		if (!question || loading) return;

		setInput('');
		addMessage({ role: 'user', text: question });
		setLoading(true);

		// fetch visitor info in parallel with initial delay
		const [visitor] = await Promise.all([fetchVisitorInfo(), sleep(800)]);

		// reveal location line by line
		addMessage({ role: 'system', text: '> Intercepting connection...' });
		await sleep(700);

		addMessage({ role: 'system', text: `> IP detected: ${visitor?.ip ?? 'unknown'}` });
		await sleep(800);

		addMessage({ role: 'system', text: '> Resolving geolocation...' });
		await sleep(900);

		if (visitor) {
			addMessage({ role: 'system', text: `> City: ${visitor.city}` });
			await sleep(600);
			addMessage({ role: 'system', text: `> Region: ${visitor.region}` });
			await sleep(600);
			addMessage({ role: 'system', text: `> Country: ${visitor.country}` });
			await sleep(600);
			addMessage({ role: 'system', text: `> ISP: ${visitor.isp ?? 'unknown'}` });
			await sleep(800);
		} else {
			addMessage({ role: 'system', text: '> Location: unknown (nice VPN)' });
			await sleep(700);
		}

		addMessage({ role: 'system', text: '> Analyzing your question...' });
		await sleep(900);
		addMessage({ role: 'system', text: '> Generating response...' });
		await sleep(800);

		setLoading(false);
		addMessage({ role: 'bot', text: randomRoast() });
	}

	function handleKey(e) {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	}

	return (
		<>
			{/* Floating trigger button */}
			<button
				className="chat-trigger"
				onClick={() => setOpen(true)}
				aria-label="Open chat"
			>
				<FiMessageSquare />
			</button>

			{/* Modal */}
			{open && (
				<div className="chat-modal" onClick={handleBackdropClick}>
					<div className="chat-modal__dialog">
						<div className="chat-modal__header">
							<span className="chat-modal__header-title">
								<span className="chat-modal__dot" />
								Ask Eugene&apos;s AI
							</span>
							<button
								className="chat-modal__close"
								onClick={() => setOpen(false)}
								aria-label="Close chat"
							>
								<FiX />
							</button>
						</div>

						<div className="chat-modal__messages">
							{messages.map((msg, i) => (
								<div
									key={i}
									className={`chat-modal__msg chat-modal__msg--${msg.role}`}
								>
									{msg.text}
								</div>
							))}
							{loading && (
								<div className="chat-modal__msg chat-modal__msg--typing">
									<span /><span /><span />
								</div>
							)}
							<div ref={bottomRef} />
						</div>

						<div className="chat-modal__input-row">
							<input
								className="chat-modal__input"
								type="text"
								placeholder="Ask something..."
								value={input}
								onChange={(e) => setInput(e.target.value)}
								onKeyDown={handleKey}
								disabled={loading}
								autoFocus
							/>
							<button
								className="chat-modal__send"
								onClick={handleSend}
								disabled={loading || !input.trim()}
								aria-label="Send"
							>
								<FiSend />
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
