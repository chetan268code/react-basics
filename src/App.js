import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import PersonList from './components/PersonList';
import STylesheet from './components/STylesheet';
import Inline from './components/Inline';
import './components/appStyles.css';
import styles from './components/appStyles.module.css';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import ClickCounterHOC from './components/ClickCounterHOC'
import HoverCounterHOC from './components/HoverCounterHOC';

function App() {
  return (
    <div className="App">
      {/* 5 Functional Components */}
      {/* <Greet></Greet> */}

      {/* 6 Class Components */}
      {/* <Welcome></Welcome> */}

      {/* 7 Hooks */}

      {/* 8 JSX */}
      {/* <Hello></Hello> */}

      {/* 9 Props: Note: Props are immutable (value cannot be changed - Just like Vue) */}
      {/* <Greet name='Chetan'>This is children, just like slots</Greet>
      <Welcome name='Chetan'>This is children, just like slots</Welcome> */}

      {/* 10 State: Just like data of components in Vue */}
      {/* <Message></Message> */}

      {/* 11 setState */}
      {/* <Counter></Counter> */}

      {/* 12 Destructuring States and props */}
      {/* Normal JS concept */}

      {/* 13 Event Handling */}
      {/* <FunctionClick></FunctionClick>
      <ClassClick></ClassClick> */}

      {/* 14 Event Binding */}
      {/* <EventBind></EventBind> */}

      {/* 15 Methods as props - Child to parent communication */}
      {/* <ParentComponent></ParentComponent> */}

      {/* 16 Conditional Rendering */}
      {/* <UserGreeting></UserGreeting> */}

      {/* 17 List Rendering */}
      {/* <NameList></NameList> */}
      {/* <PersonList></PersonList> */}

      {/* 20 Styling and CSS Basics */}
      {/* <STylesheet primary={true}></STylesheet>
      <Inline></Inline>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1> */}

      {/* 21 basics of working with forms */}
      {/* <Form></Form> */}

      {/* 23 Component Mounting Lifecycle Methods */}
      {/* constructor, static getDerivedStateFromProps, render, componentDidMount */}
      {/* Constructor - When instance is created. Bind event hendlers. Do not make network requests here */}
      {/* static getDerivedStateFromProps(props, state) - when state depends on changes in props over time. 
      Does not have access to this keyword, return object instead. Do not make network requests */}
      {/* render - returns the JSX. After this child component lifecycle methods are executed.
      Do not make network requests. Do not interact with DOM */}
      {/* componentDidMount - Called only once. Called once all child components are mounted onto the DOM
      Can make network requests. Can interact with DOM */}
      {/* <LifecycleA /> */}

      {/* 24 Component Updating Lifecycle Methods */}
      {/* static getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate */}
      {/* static getDerivedStateFromProps(props, state) */}
      {/* shouldComponentUpdate(nextProps, nextState) - return true or false for compont should update or not. Return true by default */}
      {/* render */}
      {/* getSnapshotBeforeUpdate(prevProps, prevState) - accepts prev porops and state and called just before changes from 
      virtual DOM are mounted to DOM. Return null or value and this value is passed as a third parameneter to componetDidMount */}
      {/* componentDidUpdate(prevProps, prevState, snapshot) - After render is finishaed. Even the children. Can make network requests. Can interact with DOM */}
      {/* <LifecycleA /> */}

      {/* 25 Fragments - Like template in Vue */}
      {/* <FragmentDemo></FragmentDemo> */}

      {/* 26 Pure Components - implements shouldComponentUpdate with shallow prop and state comparison - For class based components */}
      {/* <ParentComp></ParentComp> */}

      {/* 27 Memo */}
      {/* Purecomponent for functional components */}
      {/* <ParentComp></ParentComp> */}

      {/* 28 Refs */}
      {/* <RefsDemo></RefsDemo> */}

      {/* 29 Refs with Class Components */}
      {/* <FocusInput></FocusInput> */}

      {/* 30 Forwarding Refs */}
      {/* <FRParentInput /> */}

      {/* 31 Portals */}
      {/* <PortalDemo /> */}

      {/* 32 Error Boundary */}
      {/* static getDerivedStateFromError, componentDidCatch */}
      {/* getDerivedStateFromError - Used to present a fallback UI */}
      {/* componentDidCatch - Used to log error information */}
      {/* Note: Only catch errors during rendering, lifecycle methods and constructor */}
      {/* <ErrorBoundary>
        <Hero heroName='Joker'></Hero>
      </ErrorBoundary> */}

      {/* 33 HOC - Part 1 */}
      {/* <ClickCounter></ClickCounter>
      <HoverCounter></HoverCounter> */}

      {/* 34 HOC - Part 2 */}
      {/* A function that takes component as an argument and returns a new component */}
      {/* const newComponent = HOC(originalComponent) */}
      <ClickCounterHOC name='Chetan'></ClickCounterHOC>
      <HoverCounterHOC name='Chetan'></HoverCounterHOC>

    </div>
  );
}

export default App;
