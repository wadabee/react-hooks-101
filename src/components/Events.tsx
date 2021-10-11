import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { Action, Event } from "../reducers";
import EventItem from "./EventItem";

type props = {
  state: Array<Event>;
  dispatch: React.Dispatch<Action>;
};

const Events: React.FC<props> = ({ state, dispatch }) => {
  const value = useContext(AppContext);
  return (
    <>
      <div>{value}</div>
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
