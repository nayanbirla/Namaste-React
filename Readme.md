# Episode 1

Questions

1. What is CDN
2. What is Cross Origin

# Episode 2

git and github diff
package.json is configuaration
npm full form is not node package manager

npm is a package manager

most important package in our project is bundler

bundler (webpack,parcel,weed etc)
bundler bundle the packages for production

create react app use web-pack behind the scene

parcel comes as a node package

to install any parcel

npm install package name
like

npm install -D parcel

what is -D
so one is dev dependency and one is normal(production) dependency

tilde(~) and caret(^) in npm?

if there is minor update like 2.8.3 to 2.8.4 so ^ automatically updates

~ is use for major version

what is difference between package.json and package-lock.json?

package.json records approx verion
package-lock.json have exact version

Node modules is very heavy(see memes)

what are other things that comes with parcel?
the things are downloaded with parcel have transitive dependency
like parcel uses babel

we are not sending node modules to github because we have package.json and package-lock.json so we can regenrate all things

what is npx parcel index.html?

npm used to install and npx used to execute

cdn link is not prefered way because it is a heavy task
to call other network

so we install react as a package

npm install react

and also

npm install react-dom or npm i react-dom

i is nothing but a short form of install

what parcel do?

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorith - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code splitting
- Differential Bundling - support older browsers
- Doagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

**_ Parcel is a Beast _**

npx parcel build index.html
this will give error because in package.json we have one tage name "main": "App.js" so remove this
because it tells entry point but with parcel we give file name so it creates conflict

dist contains production ready file

we don't need to push dist and parcel-cache to git because we can regenrate it

// explore browserlist website

we can configure browser for out app in package.json

"browserlist":[
"last 2 versions"
]

there are multiple ways to do it explore browserlist website for that

# Episode 3

'npm start' is equivalent to 'npm run start'
'npm run start' execute 'parcel index.html' behind the scene
because we have configured it in out package.json

_package.json_
"scripts":{
"start": "parcel index.html",
"build": "parcel build index.html",
"test": "jest"
}

- React.createElement is an object
- when we render this object to DOM using ReactDOM then it becomes an HTML Element

- root.render(----) replace the elements inside the root. it will not append it replace the elements

_JSX_
JavaScript Syntax

- JSX is not a part of react. we can build application of react without JSX. But JSX makes developer life easy.

- JSX is not HTML inside javascript
- JSX is different then HTML
- JSX is HTML like syntax or XML like syntax

example code
const jsxHeading = <h1 id="heading">Namaste React using JSX </h1>;

above code is react element using JSX.

JSX is not valid javascript

so the question arise how jsx is working?
the answer is simple parcle is doing the things for us.
the code is transpiled before it goes to js engine.
But parcel not directly convert it. But is uses Babel for transpiled the code.

JSX is converted into React.createElement and the it makes js object to => HTMLElement(render)

Babel convert JSX to react.creatElement

Babel is a JavaScript Compiler

to give tag to JSX we have to follow camel case
Example: <h1 className="head">HY</h1>

Explore more tags in JSX

# React Component

Two types of component

1. Class based component - OLD types
2. Function based component - NEW types

React functional component is nothing but a normal js function which returns some JSX.

# Component Composition

cost HeadingComponent = () =>(

<div id="container">
<Title />
<h1 className="heading">Namaste React Functional Component</h1>
<div>
);
component inside component is component compostion

JSX prevents malicious attack it prevents from cross site scripting attacks

# Episode 4

passing an argument to a function is same as passing a props

config driven ui

it is not recommended to use index as a key

# Episode 5

.js or .jsx in extension does not make difference

There are two types of export/import named export and default export

- it is recommended to use named export/import if we have multiple things to export

# example

export default Component;
import Component from "path";

- to import named export we use {}
  example
  export const Component
  import { Component } from "../utils/con";

can i use default export as a named import?

# React Hooks

- Normal js utility functions

Two imp hooks

- useState() => superpowerful state variable in react
- useEffect()

import {useState} from "React";
so it is a named import

whenever a state variable changes react re render the component

# React Behind the Scene

Reconciliation Algorithm (React Fiber) => in react 16

virtual dom is a representation of actual dom.
virtual dom is nothing but a js object
Actual dom is tag <div> <div>

diff algorithm => difference between old and new object

# Episode 6

There are two ways to put data and render it

1. Loads -> API -> Render
2. Loads -> Render -> API -> Render

in react we use 2nd way because it gives better user experience.

what is optional chaining

shimmer Ui

Whenever state variable updates, react triggers a reconciliation cycle (re-render the component)

# Episode 7

# useEffect hooks

- if no dependency array => useEffect is called on every render

example
useEffect(()=>{
});

- if dependency array is empty = [] => useEffect is called on initial render(just once)

example
useEffect(()=>{
},[]);

- if dependency array is [btnNameReact] => called everytime btnNameReact is updated

example
useEffect(()=>{
},[btnNameReact]);

# useState Hook

- it is used to create local state variable inside your functional component

# React Routing

- we generally use createBrowserRouter to create routing path

example
const approuter = createBrowserRouter([
{
path: "/",
element: <AppLayout />,
errorElement: <Error />, // we can specify out own page for error
},
{
path: "/about",
element: <About />,
},
{
path: "/contact",
element: <Contact />,
},
]);

Error page

import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
const error = useRouteError();
return (
<div>
<h1>OOPs!</h1>
<h3>{error.status}</h3>
</div>
);
};
export default Error;

- in this we use a new hook which is useRouteError this have all the error which comes like to take status we print error.status

- We use RouterProvider to put all our routing

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);

- approuter have all path specified

- read about outlet

# Episode 8

Class based component

to make class based component we inherit our class with React.Component

class About extends React.Component

to use props we use constructor and we must write super(props) inside constructor

Constructor(props){
}

to make state variable in class based components

Constructor(){

this.state={
count:0,
count2:2

}

to update the value of state variable we have a method called setState

this.setState({
count: this.state.count+1;
})

in class based component calling procedue is

1. Constructor
2. Render method
3. componentDidMount

ComponentDidMount is used for calling an API.

it is used for calling api because it calls last after render.

# refer react lifecycle diagram

how react lifecycle works

- parent class constructor
- parent class render
- first child constructor
- first child render
- second child constructor
- second child render
- first child component did mount
- second child component did mount
- parent component did mount

Read About  
Component did update
Component will update
