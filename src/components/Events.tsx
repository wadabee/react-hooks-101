import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import EventItem from "./EventItem";

const Events: React.FC = () => {
  const { state } = useContext(AppContext);
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
            <EventItem key={idx} event={e} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Events;
