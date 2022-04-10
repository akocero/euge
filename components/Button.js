import Link from "next/link";
import { motion } from "framer-motion";

export default function Button({ href, className, text, target }) {
	return (
		<Link href={href}>
			<motion.a
				href={href}
				className={className}
				target={target}
				whileHover={{
					scale: 1.1,
					y: -2,
				}}
			>
				{text}
			</motion.a>
		</Link>
	);
}
