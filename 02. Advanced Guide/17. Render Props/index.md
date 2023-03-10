### 01. Render Props

---

The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function.
A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.

---

```
<DataProvider render={data => (
  <h1>Hello {data.target}</h1>
)}/>

```

### 02. Use Render Props for Cross-Cutting Concerns

---

---

### 03. Caveats

---

Be careful when using Render Props with React.PureComponent

---
