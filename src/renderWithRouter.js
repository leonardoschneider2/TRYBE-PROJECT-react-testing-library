import { render } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

function renderWithRouter(component) {
  const customHistory = createMemoryHistory();
  
  const returnFromRender = render(
    <Router history={customHistory}>{component}</Router>
  );

  return { history: customHistory, ...returnFromRender };
}

export default renderWithRouter;
