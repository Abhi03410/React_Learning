1.what is Reactjs?

React is a JavaScript library used to build reusable and interactive user interfaces using components.

library means that simple js file we can provide predefined feature like class,function,object.

2.Why do we use React?

2.A.Component-based development:-

React application can be divided into small reusable components.

App-> 
      header
      maincontent
      userCard
      footer

2.B.Reusable Component:-

You can reuse UserCard multiple times.

<userCard/>
<userCard/>
<userCard/>

One More Example are suppose i have create a button component and this component using multiple different component so react application 
easily using buttonComponent.

first up all i have created one buttonComponent and this component inside simple or bootstrap button create.
then this button component using my four component like home,about,product,blog.i am simplily use to the buttonComponent.

<button/> in four component using.

3. Virtual DOM? *****

Virtual DOM (Virtual Document Object Model) is a lightweight copy of the real DOM that React keeps in memory.

React uses Virtual DOM to update the UI efficiently instead of directly changing the entire Real DOM.

User changes name
       ↓
React detects UI change
       ↓
Virtual DOM comparison
       ↓
Only required DOM update

4.One-way data flow?

One-way data flow means that data flows in only one direction — from Parent → Child.

In React, the parent component passes data to the child component using props.

function App() {
  return <User name="Abhishek" />;
}

function User({ name }) {
  return <h2>{name}</h2>;
}

5.JSX?

JSX stands for JavaScript XML.

JSX allows us to write HTML-like code inside JavaScript. It makes React code easier to read and write.

function App() {
  const name = "Abhishek";

  return (
    <div>
      <h1>Hello {name}</h1>
      <p>Welcome to React</p>
    </div>
  );
}

6. Large ecosystem?

React has a large ecosystem.

React
 ├── React Router
 ├── Redux
 ├── Zustand
 ├── TanStack Query
 ├── Material UI
 └── Next.js

You can select libraries according to your project requirements.

7. Good for SPA applications?

React can be used to create applications such as:

Banking applications
E-commerce applications
Admin dashboards
Social media applications
Booking applications
CRM applications

8.React vs Angular — basic difference?

The biggest difference is:

React	                                           Angular
JavaScript library	                          Full web framework
Created by Meta	                              Maintained by Google
Mainly UI layer	                              Complete application framework
JSX commonly used	                          HTML templates
JavaScript/TypeScript	                      TypeScript
More freedom in architecture	              More opinionated structure
Libraries added as needed	                  Many features built-in


### React Application Setup — Step by Step ####

1.we can check node.js and npm version is install or not

node -v  and npm -v

2.we can create react application

npm create vite@latest

Project name: react-learning

Select a framework: React

Select a variant: JavaScript






