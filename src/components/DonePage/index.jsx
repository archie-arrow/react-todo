import React from "react";
import { useSelector } from "react-redux";

import Notes from "../Notes";
import Note from "../Note";
import NotesHeader from "../NotesHeader";

export default function DonePage({ searchInput }) {
  const data = useSelector((state) => state.todo.data);

  let list = [];

  for (let key in data) {
    if (searchInput !== undefined && searchInput !== "") {
      if (
        data[key].title.toLowerCase().includes(searchInput.toLowerCase()) &&
        data[key].done
      ) {
        list.push(
          <Note todoId={key} key={key}>
            {data[key].title}
          </Note>
        );
      }
    } else {
      if (data[key].done) {
        list.push(
          <Note todoId={key} key={key}>
            {data[key].title}
          </Note>
        );
      }
    }
  }

  return (
    <>
      <NotesHeader num={list.length}>Done todos</NotesHeader>
      <Notes list={list} />
    </>
  );
}
