import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { Event } from "../reducers";

type Props = {
  event: Event;
};

const EventItem: React.FC<Props> = (props) => {
  const { dispatch } = useContext(AppContext);

  const id = props.event.id;
  const handleClickDeleteButton = () => {
    if (window.confirm(`イベント（id=${id}）を削除しますか？`)) {
      dispatch({
        type: "DELETE_EVENT",
        id: id,
      });
    }
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
