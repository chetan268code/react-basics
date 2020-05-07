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

function App() {
  return (
    <div className="App">
      {/* 5 Functional Components */}
      {/* <Greet></Greet> */}

      {/* 6 Class Components */}
      {/* <Welcome></Welcome> */}

      {/* 8 JSX */}
      {/* <Hello></Hello> */}

      {/* 9 Props */}
      {/* <Greet name='Chetan'>This is children</Greet>
      <Welcome name='Chetan'></Welcome> */}

      {/* 10 State */}
      {/* <Message></Message> */}

      {/* 11 setState */}
      {/* <Counter></Counter> */}

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
      {/* constructor, getDerivedStateFromProps, render, componentDidMount */}
      {/* Constructor - When instance is created */}
      {/* getDerivedStateFromProps - when state depends on changes in props over time. Does not have access to this keyword */}
      {/* render - returns the JSX. After this child component lifecycle methods are executed */}
      {/* componentDidMount - Called only once. Called once all child components are mounted onto the DOM */}
      {/* <LifecycleA /> */}

      {/* 24 Component Mounting Lifecycle Methods */}
      {/* getDerivedStateFromProps, shouldComponentUpdate, render, getSnapshotBeforeUpdate, componentDidUpdate */}
      {/* getDerivedStateFromProps(nextProps, nextState) */}
      {/* shouldComponentUpdate - return true or false for compont should update or not. Return true by default */}
      {/* render */}
      {/* getSnapshotBeforeUpdate(prevProps, prevState) - accepts prev porops and state and called just before changes from 
      virtual DOM are mounted to DOM. Return null or value and this value is passed as a third parameneter to componetDidMount */}
      {/* componentDidUpdate(prevProps, prevState, snapshot) - After render is finishaed. Even the children */}
      {/* <LifecycleA /> */}

      {/* 25 Fragments */}
      {/* <FragmentDemo></FragmentDemo> */}

      {/* 26 Pure Components */}
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
      

    </div>
  );
}

export default App;
