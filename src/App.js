import { RouterProvider } from "react-router-dom";
// import Main from "./layout/Main/Main";
import route from "./router/route";

function App() {
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
