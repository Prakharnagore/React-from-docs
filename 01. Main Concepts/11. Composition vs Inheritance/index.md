## Composition vs Inheritance
---
React has a powerful composition model, and we recommend using composition instead of inheritance to reuse code between components.
NOTE: Components may accept arbitrary props, including primitive values, React elements, or functions.
---

### 01. Containment
---
Some components don’t know their children ahead of time. This is especially common for components like Sidebar or Dialog that represent generic “boxes”.
Such components use the special children prop to pass children elements directly into their output
---

### 02. Specialization
