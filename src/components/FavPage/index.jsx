import React from "react";
import { useSelector } from "react-redux";

import Notes from "../Notes";
import Note from "../Note";
import NotesHeader from "../NotesHeader";

export default function FavPage() {
  const data = useSelector((state) => state.todo.data);

  let list = [];

  for (let key in data) {
    if (data[key].fav) {
      list.push(
        <Note todoId={key} key={key}>
          {data[key].title}
        </Note>
      );
    }
  }

  return (
    <>
      <NotesHeader num={list.length}>Favorite todos</NotesHeader>
      <Notes list={list} />
    </>
  );
}