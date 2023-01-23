/* 
 01
 What are React components?
 A component is usually defined as a function of its state and props.
*/

/* 
 02
 React functional components vs. class components
 React supports two types of components, class components 
 and functional components. A functional component is a plain JavaScript 
 function that returns JSX. A class component is a JavaScript class that 
 extends React.Component and returns JSX inside a render method.
*/

/*
   03
   What is a pure component in React?
   Based on the concept of purity in functional programming paradigms,
   a function is said to be pure if it meets the following two conditions:
   Its return value is only determined by its input values
   Its return value is always the same for the same input values

   A React component is considered pure if it renders the same output 
   for the same state and props. For this type of class component,
   React provides the PureComponent base class. Class components that
   extend the React.PureComponent class are treated as pure components.

   Pure components have some performance improvements and render optimizations 
   since React implements the shouldComponentUpdate() method for them with a shallow 
   comparison for props and state.
*/


/*
 04
 With React.memo(), you can create memoized functional components 
 that bail out of rendering on unnecessary updates using shallow comparison of props.

 The React.memo() API can take a second argument, the arePropsEqual() function. 
 The default behavior of React.memo() is to shallowly compare the component props. 
 However, with the arePropsEqual() function, you can customize the bailout condition 
 for component updates. The arePropsEqual() function is defined with two parameters, 
 prevProps and nextProps.

 Very similar to the shouldComponentUpdate();
*/

import React, { memo } from 'react';

function PercentageStat({ label, score = 0, total = Math.max(1, score) }) {
  return (
    <div>
      <h6>{ label }</h6>
      <span>{ Math.round(score / total * 100) }%</span>
    </div>
  )
}

function arePropsEqual(prevProps, nextProps) {
  return prevProps.label === nextProps.label; 
}

// Wrap component using `React.memo()` and pass `arePropsEqual`
export default memo(PercentageStat, arePropsEqual);