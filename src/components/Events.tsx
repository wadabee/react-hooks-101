import React from "react";
import { Action, Event } from "../reducers";
import EventItem from "./EventItem";

type props = {
  state: Array<Event>;
  dispatch: React.Dispatch<Action>;
};

const Events: React.FC<props> = ({ state, dispatch }) => {
  return (
    <>
      <h4>イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディー</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {state.map((e, idx) => (
            <EventItem key={idx} event={e} dispatch={dispatch} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Events;
