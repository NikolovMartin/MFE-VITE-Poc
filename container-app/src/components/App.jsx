import { Suspense } from "react";

const App = ({ component: Component }) => {
  return (
    <Suspense fallback="Loading app ...">
      <Component />
    </Suspense>
  );
};

export default App;
