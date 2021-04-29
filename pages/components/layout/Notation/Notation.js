import React, {useState, useEffect} from "react";
import {CreateNote} from "./CreateNote";
import styles from "../../../../assets/scss/notation/Notations.module.css";
import {Note as NewNote} from "./Note";
import {addPost} from "../../../feature/notation/notationSlice";
import {useDispatch, useSelector} from "react-redux";

const Notation = () => {
	const [headValue, setHeadValue] = useState(null);
	const [textValue, setTextValue] = useState(null);
	const [date, setDate] = useState(null);
	const dispatch = useDispatch();
	const stateNotes = useSelector((state)=> state.notation);

	const setNewNote = () => {
		if(textValue && headValue) {
			const newNote = {
				text: textValue,
				header: headValue,
				date: date,
				id: Math.random().toString(16).slice(2)
			};

			setTextValue(null);
			setHeadValue(null);
			setDate(null);
			return dispatch(addPost(newNote));
		}
	};

	useEffect(() => {
		setNewNote();
	},[headValue, textValue]);


	const renderNotes = () => {
		if(stateNotes.length !== 0) {
			return stateNotes.map((note, i) => {
				return <NewNote key={i} header={note.header} text={note.text} date={note.date} id={note.id}/>;
			});
		} else {
			return null;
		}
	};

	return (
		<section className={styles.notations}>
			<h1>Notations Journal</h1>
			<CreateNote setHeadValue={setHeadValue} setTextValue={setTextValue} setDate={setDate} />
			{renderNotes()}
		</section>
	);
};

export default Notation;