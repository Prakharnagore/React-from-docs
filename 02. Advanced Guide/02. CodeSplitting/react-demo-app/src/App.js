import React, { Suspense } from "react";
const Substract = React.lazy(() => import("./substract")); 

import("./math").then(math => {
  console.log(math.add(16, 26));
});

const App = () => {
  return <div>
  <Suspense fallback={<div>Loading...</div>}>
    <Substract />
  </Suspense>
</div>
};

export default App;
