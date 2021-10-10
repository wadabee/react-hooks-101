import React from "react";
import { Action, Event } from "../reducers";

type Props = {
  event: Event;
  dispatch: React.Dispatch<Action>;
};

const EventItem: React.FC<Props> = (props) => {
  const id = props.event.id;
  const handleClickDeleteButton = () => {
    props.dispatch({
      type: "DELETE_EVENT",
      id: id,
    });
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{props.event.title}</td>
      <td>{props.event.body}</td>
      <td>
        <button className="btn btn-danger" onClick={handleClickDeleteButton}>
          削除
        </button>
      </td>
    </tr>
  );
};
export default EventItem;
