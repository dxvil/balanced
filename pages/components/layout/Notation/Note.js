import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {deletePost} from "../../../feature/notation/notationSlice";
export const Note =({header, text, date, emotion, id}) =>{
	const dispatch = useDispatch();
	return(
		<div className={`note ${id}`}>
			<h1>{header}</h1>
			<p>{text}</p>
			<p>{date}</p>
			{emotion}
			<button onClick={() => {
				dispatch(deletePost(id));
			}}>delete</button>
		</div>
	);
};