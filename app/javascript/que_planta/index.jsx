import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import ReduxPromise from 'redux-promise';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/app';
// import messagesReducer from './reducers/messages_reducer';

const Planta = props => (
  <div>Hello {props.name}!</div>
);

// const App = () => {
//   return (
//     <div>My plants go here:
//       <Planta name="Plants plants plants!" />,
//     </div>
//   );
// };

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Planta name="Plants plants plants!" />,
//     document.body.appendChild(document.createElement('div')),
//   )
// })

const initialState = {
  // messages: [],
  // channels: JSON.parse(chatContainer.dataset.channels).map(c => c.name)
};

const reducers = combineReducers({
  // messages: messagesReducer,
  // channels: (state = null, action) => state
});

const middlewares = applyMiddleware(logger, ReduxPromise);
const store = createStore(reducers, initialState, middlewares);

ReactDOM.render(
  <Provider store={store}>
    <Planta name="Plants plants plants!"/>
  </Provider>,
  document.getElementById('app')
);
