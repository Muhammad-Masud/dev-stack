# Dev Stack

A responsive React + TypeScript + Vite developer technology stack builder based on the supplied UI reference.

## Stack

- React + TypeScript + Vite
- Tailwind CSS
- DaisyUI
- React-Toastify
- Oxlint


## React Questions

**1. What is JSX, and why is it used in React?

Ans: JSX is a syntax extension that allows HTML-like markup within JavaScript. It improves readability compared to writing React.createElement() directly, into which it is ultimately compiled.

**2. What is the difference between props and state?

Ans: Props are read-only data passed from a parent to a child component. State is data a component manages internally and can update over time. In this project, tech is passed as a prop, while stack is state managed within App.

**3. What does the useState hook do, and where did you use it in this project?

Ans: useState allows a component to retain data across renders and re-render when that data changes. It is used in TechnologiesSection.tsx for technologies, loading, and stack; and in Navbar.tsx.

**4. What does the useEffect hook do, and why did you need it to load the JSON data?

Ans: useEffect runs side effects, such as data fetching, after rendering. An empty dependency array [] was used to ensure the JSON data loads only once, when the component mounts.

**5. Why does every item in a .map() list need a unique key prop?

Ans: The key prop allows React to identify which items were added, removed, or changed between renders. Without stable keys, list updates can lead to incorrect rendering or performance issues.

**6. What is conditional rendering? Show one place you used it.

Ans: Conditional rendering displays different UI based on a condition. In StackSidebar.tsx:

tsx
<p className="mt-1 text-sm text-slate-500">
          {stack.length} Technology{" "}
          {stack.length === 1 ? "Selected" : "Selected"}
        </p>


**7. How do you pass data from a parent to a child, and how does a child send data back to a parent?

Ans: In React, you pass data from a parent to a child component using props, and a child sends data back to a parent using a callback function passed down as a prop.