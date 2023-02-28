### 01. Bundling 
----
Process of importing files and merging them into a single file called “bundle”. 
----

#### 02. Code Splitting
----
Bundling is great, but as your app grows, your bundle will grow too. Especially if you are including large third-party libraries. You need to keep an eye on the code you are including in your bundle so that you don’t accidentally make it so large that your app takes a long time to load.

To avoid winding up with a large bundle, it’s good to get ahead of the problem and start “splitting” your bundle. Code-Splitting is a feature supported by bundlers like Webpack, Rollup and Browserify (via factor-bundle) which can create multiple bundles that can be dynamically loaded at runtime.

Code-splitting your app can help you “lazy-load” just the things that are currently needed by the user, which can dramatically improve the performance of your app. While you haven’t reduced the overall amount of code in your app, you’ve avoided loading code that the user may never need, and reduced the amount of code needed during the initial load.

----


### 03. import()
---
Dynamic import() syntax.
---
```
Before:

import { add } from './math';
console.log(add(16, 26));

After:
import("./math").then(math => {
  console.log(math.add(16, 26));
});
```

### 04. React.lazy
---
The React.lazy function lets you render a dynamic import as a regular component.
The lazy component should then be rendered inside a Suspense component, which allows us to show some fallback content (such as a loading indicator) while we’re waiting for the lazy component to load.
---
```
Before:
import OtherComponent from './OtherComponent';

After:
const OtherComponent = React.lazy(() => import('./OtherComponent'));

import React, { Suspense } from 'react';
const OtherComponent = React.lazy(() => import('./OtherComponent'));
function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
```