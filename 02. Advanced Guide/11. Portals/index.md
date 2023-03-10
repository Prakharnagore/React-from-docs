### 01. Portals

---

Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.The first argument (child) is any renderable React child, such as an element, string, or fragment. The second argument (container) is a DOM element.

---

```
ReactDOM.createPortal(child, container)

```

### 02. Usage

---

---

```
render() {
  return ReactDOM.createPortal(
    this.props.children,
    domNode
  );
}
```

### 03. Event Bubbling Through Portals
---
---