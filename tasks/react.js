[{"title":"Advantages and Disadvantages of React","content":"Advantages of React include its ability to handle complex user interfaces, its flexibility and reusability of components, and its performance optimization through the use of a virtual DOM. Disadvantages include a steep learning curve for beginners and the need for additional libraries or tools to complete a full-featured application.","connection":"this helps understand React advantages"},{"title":"What is Virtual DOM?","content":"Virtual DOM is a lightweight in-memory representation of the actual DOM (Document Object Model). It is used to improve the performance of updates and changes to the actual DOM by reducing the number of expensive DOM manipulations.","connection":"this helps answer the most popular interview question"},{"title":"How does Virtual DOM works?","content":"Virtual DOM works by comparing the current virtual DOM tree with a new virtual DOM tree, and then applying the minimal set of changes to the actual DOM. This allows React to efficiently update the user interface without causing unnecessary re-renders or layout changes.","connection":"?_1"},{"title":"What is the difference between Shadow DOM and Virtual DOM?","content":"Shadow DOM refers to a feature of web browsers that allows developers to create a separate DOM tree, called a shadow tree, that is attached to a specific element and is hidden from the main document. Virtual DOM is a concept used in React to optimize the performance of updates to the user interface, whereas Shadow DOM is a feature of web browsers that allows for scoping of CSS and JavaScript within a specific element.","connection":"?_2"},{"title":"What are the differences between Real DOM and Virtual DOM?","content":"Real DOM is the actual tree-like structure of a web page, which can be manipulated directly to change the layout or content of the page. Virtual DOM is a lightweight in-memory representation of the actual DOM, which is used to optimize the performance of updates to the user interface.","connection":"?_3"},{"title":"What is React Fiber?","content":"React Fiber is a new reconciliation algorithm that was introduced in React 16. It is designed to improve the performance and flexibility of React by breaking down the render process into smaller, asynchronous chunks.","connection":"?_4"},{"title":"What is the main goal of React Fiber?","content":"The main goal of React Fiber is to improve the performance and responsiveness of web applications by breaking down the render process into smaller, asynchronous chunks. This allows React to more effectively utilize the main thread and to better handle complex user interfaces.","connection":"?_5"},{"title":"What is reconciliation?","content":"Reconciliation is the process that React uses to determine the minimal set of changes to be made to the actual DOM. It compares the current virtual DOM tree with a new virtual DOM tree, and then applies the minimal set of changes to the actual DOM.","connection":"?_6"},{"title":"What is JSX?","content":"JSX is a syntax extension for JavaScript that allows developers to write HTML-like elements in their JavaScript code. It is commonly used in React to describe the structure and content of a component's user interface.","connection":"?_7"},{"title":"Can browsers read a JSX file?","content":"Browsers cannot read JSX files directly. They must be transpiled, or converted, to JavaScript before they can be interpreted by the browser.","connection":"?_8"},{"title":"Explain how VirtualDOM works","content":"Virtual DOM is a lightweight, in-memory representation of the actual DOM. It is used to improve the performance of updates and changes to the actual DOM by reducing the number of expensive DOM manipulations. When a component's state or props change, React will create a new virtual DOM tree, compare it to the previous tree, and then apply only the minimal set of changes necessary to the actual DOM. This improves the performance of the application and reduces the number of unnecessary re-renders.","connection":"?_9"},{"title":"What are React components?","content":"In React, everything is a component. A component is a small, reusable piece of code that represents a part of a user interface. Components can be defined as either a class or a function and can include a combination of HTML, CSS, and JavaScript code. These components can also be nested and reused throughout the application, which makes it easy to manage and maintain the application's user interface.","connection":"?_10"},{"title":"What is the meaning of the component-based architecture of React?","content":"The component-based architecture of React allows developers to build complex user interfaces by breaking them down into smaller, reusable components. Each component can manage its own state and props, and can be easily reused throughout the application. This structure makes it easy to understand, test, and maintain the application's codebase.","connection":"?_11"},{"title":"What are functional components?","content":"Functional components in React are simply JavaScript functions that return a React element. They do not have state or lifecycle methods and are used for simple, stateless components.","connection":"?_12"},{"title":"What are class components in React?","content":"Class components in React are defined using the ES6 class syntax. They have access to state and lifecycle methods and are used for more complex, stateful components.","connection":"?_13"},{"title":"What is the difference between functional and class components in React?","content":"The main difference between functional and class components in React is that functional components are simpler and do not have state or lifecycle methods, whereas class components have access to state and lifecycle methods and are more powerful. Additionally, functional components use hooks for state management.","connection":"?_14"},{"title":"How to use CSS in React?","content":"In React, CSS can be added to a component in several ways: 1) Using inline styles 2) Using a CSS file and importing it into the component 3) Using a CSS preprocessor like Sass or Less 4) Using a CSS-in-JS library like styled-components","connection":"?_15"},{"title":"How does rendering work in React?","content":"React's rendering process begins when a component's state or props change. React will create a new virtual DOM tree, compare it to the previous tree, and then apply only the minimal set of changes necessary to the actual DOM. This process is called reconciliation.","connection":"?_16"},{"title":"What are states in React?","content":"State in React is an object that holds data that can change, and it is managed by a component. It is used to store and update the component's data and can be passed down to child components as props. State can be updated using the setState method, which triggers a re-render of the component, updating the user interface.","connection":"?_17"},{"title":"What are props in React?","content":"Props in React are used to pass data from a parent component to a child component. They are essentially a way to pass data and methods down the component tree. Props are read-only, meaning that they cannot be modified by the child component.","connection":"?_18"},{"title":"What is children prop?","content":"The children prop is a special prop that is used to pass children elements to a component. It is used to pass elements between components, such as a list of items or a set of nested components.","connection":"?_19"}]