export type Action = {
  type: "CREATE_EVENT" | "DELETE_EVENT" | "DELETE_ALL_EVENTS";
  id?: number;
  title?: string;
  body?: string;
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
      return state;

    default:
      return state;
  }
};
