import { getData } from "./API/fetching";
import AppRouter from "./router/AppRouter";
import { useHistory } from "react-router-dom";

const App = () => {
  const history = useHistory();
  getData();
  return <AppRouter history={history} />;
};

export default App;
