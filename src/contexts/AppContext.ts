import { createContext } from "react";
import { Action, Event } from "../reducers";

type AppContextType = {
  state: Array<Event>;
  dispatch: React.Dispatch<Action>;
};

const AppContext = createContext({} as AppContextType);

export default AppContext;
