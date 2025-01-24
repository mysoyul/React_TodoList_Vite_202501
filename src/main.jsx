import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//import { createStore, applyMiddleware } from 'redux';
//import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { toDoReducer } from './reducers';

//const store = createStore(toDoReducer, applyMiddleware(thunk));
/*
  RTK(Redux Toolkit)에 새로 추가된 store 생성 메서드 - configStore()
  - thunk middleware 추가
  - devtools 자동 연결
*/
const store = configureStore({
  reducer: toDoReducer,
  //middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk)
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
