import React from "react";
import styles from "../../../../assets/scss/notation/Note.module.scss";

const emoji = {
	"upset": "0x1F614",
	"angry": "0x1F621",
	"neutral": "0x1F610",
	"anxious": "0x1F630",
};

export const EmotionsMenu = () => {
	
	const renderEmoji = () => {
		return Object.values(emoji).map((em)=> {
			return (
				<span
					key={em}
					className={styles.emoji}
					role="img"
				>
					{String.fromCodePoint(em)}
				</span>
			);
		});
	};

	return (
		<div className={styles.menu}>
			{renderEmoji()}
		</div>
	);
};
