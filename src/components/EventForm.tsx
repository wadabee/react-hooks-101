import React, { useContext, useState } from "react";
import AppContext from "../contexts/AppContext";

const EventForm: React.FC = () => {
  const { state, dispatch } = useContext(AppContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch({
      type: "CREATE_EVENT",
      title,
      body,
    });

    setTitle("");
    setBody("");
  };

  const deleteAllEvents = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (window.confirm("本当に削除しますか？")) {
      dispatch({
        type: "DELETE_ALL_EVENTS",
      });
    }
  };

  const unCreatable = title === "" || body === "";
  const unAllDeletable = state.length === 0;
  return (
    <>
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input
            className="form-control"
            id="formEventTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="formEventBody">ボディー</label>
          <textarea
            className="form-control"
            id="formEventBody"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <button
          className="btn btn-primary"
          onClick={addEvent}
          disabled={unCreatable}
        >
          イベントを作成する
        </button>
        <button
          className="btn btn-danger"
          onClick={deleteAllEvents}
          disabled={unAllDeletable}
        >
          全てのイベントを削除する
        </button>
      </form>
    </>
  );
};

export default EventForm;
