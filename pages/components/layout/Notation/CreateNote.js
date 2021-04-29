import React, { useRef, useState} from "react";
import Note from "../../../../assets/scss/notation/Note.module.scss";
import {EmotionsMenu} from "./EmotionsMenu";
import moment from "moment";

export const CreateNote = ({setHeadValue, setTextValue, setDate}) => {
	const [emotionsMenu, setEmotionsMenu] = useState(false);
	const header = useRef(null);
	const text = useRef(null);

	const onCreatingNote = () => {
		const head = header.current;
		const t = text.current;
		if( head && t) {
			setHeadValue(head.innerText);
			setTextValue(t.innerText);
			setDate(new Date().toJSON().slice(0,10).replace(/-/g,"/"));
		}
	};

	return (
		<div className={Note.note}>
			<h1 className={Note.header} contentEditable={true} ref={header} suppressContentEditableWarning={true}>#Заметка</h1>
			<p className={Note.noteText} contentEditable={true} ref={text} suppressContentEditableWarning={true}/>
			{emotionsMenu ? <EmotionsMenu/> : null}
			<p className={Note.emotions} onClick={() => setEmotionsMenu(!emotionsMenu)}>
				#Эмоция
			</p>
			<button className={Note.createBtn} onClick={() => onCreatingNote()}>Create Note</button>
		</div>
	);
};