// Bundling
// Bundling is the process of following imported files and
// merging them into a single file a “bundle”

// Code Splitting
// Code-splitting your app can help you “lazy-load” just the things that are currently
// needed by the user, which can dramatically improve the performance of your app.
// Dynamic Import()
// Before:
import { add } from "./math";
console.log(add(16, 26));
// After
import("./math").then((math) => {
  console.log(math.add(16, 26));
});
// React.lazy
// The React.lazy function lets you render a dynamic import as a regular component
// Before
import OtherComponent from "./OtherComponent";
// After
const OtherComponent = React.lazy(() => import("./OtherComponent"));
// Fallback
<>
  <Suspense fallback={<div>Loading...</div>}>
    <section>
      <OtherComponent />
      <AnotherComponent />
    </section>
  </Suspense>
</>;

// Dynamic Import Vs React Lazy Import ?
// startTransition API ?

// Error boundaries
// If the other module fails to load (for example, due to network failure)
// it will trigger an error. You can handle these errors to show a nice user
// experience and manage recovery with Error Boundaries
// Once you’ve created your Error Boundary, you can use it anywhere above your
// lazy components to display an error state when there’s a network error
<MyErrorBoundary>
  <Suspense fallback={<div>Loading...</div>}>
    <section>
      <OtherComponent />
      <AnotherComponent />
    </section>
  </Suspense>
</MyErrorBoundary>;

// Route-based code splitting
const Home = lazy(() => import("./routes/Home"));
const About = lazy(() => import("./routes/About"));
<Router>
  <Suspense fallback={<div>Loading...</div>}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Suspense>
</Router>
