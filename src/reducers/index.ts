export type Action =
  | {
      type: "CREATE_EVENT";
      title: string;
      body: string;
    }
  | {
      type: "DELETE_EVENT";
      id: number;
    }
  | {
      type: "DELETE_ALL_EVENTS";
    };

export type Event = {
  id: number;
  title: string;
  body: string;
};

export const reducer = (state: Array<Event> = [], action: Action) => {
  switch (action.type) {
    case "CREATE_EVENT":
      const event: Event = {
        id: state.length === 0 ? 1 : state[state.length - 1].id + 1,
        title: action.title || "",
        body: action.body || "",
      };
      return [...state, event];

    case "DELETE_EVENT":
      return state.filter((e) => e.id !== action.id);

    case "DELETE_ALL_EVENTS":
      return [];

    default:
      return state;
  }
};
