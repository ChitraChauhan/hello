import React from "react";
// import ReactDOM from 'react-dom';
import { render } from "react-dom";
import "./index.css";
// import { TodoWithState as App } from "./demo";

//import { BrowserRouter } from 'react-router-dom'
//import App from './Router/App';
//import { Todo as App } from './Todo/';
// import { File as App } from './test/';
//import { Reservation as App } from './Form/Form';
//import { Refs as App } from './Form/Refs';
//import { Form1 as App } from './Form/Form1';
// import { LifeCycle as App } from './LifeCycle';
//import { Clock as App } from './LifeCycle/Clock';
//import { Props as App } from './Props/Props';
//import { Math as App } from './Math/Math'
//import { TodoList3 as App } from './TodoList/TodoList3';
//import { App } from './Router3/App';
//import { Counter as App } from './React-counter/Counter';
import { TaskApp as App } from './TaskApp/TaskApp';
//import  FilterableProductTable from './Mock2/FilterableProductTable';
// import registerServiceWorker from './registerServiceWorker';
// import {Application as App} from './LifeCycleCounter/Application';

// import  ScoreBoard from './LifeCycleTomJerry/ScoreBoard';
// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <ScoreBoard />
//             </div>
//         )
//     }
// }

render(<App />, document.getElementById("root"));

// render((<BrowserRouter>
//     <App />
// </BrowserRouter>), document.getElementById('root'));

/*setTimeout(() => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));}, 10000);*/

//render(<FilterableProductTable />, document.getElementById('root'));

// registerServiceWorker();
