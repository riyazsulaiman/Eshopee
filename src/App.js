import React from 'react';
import {Helmet} from 'react-helmet';
import {legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducers from './Components/Reducers/CombineReducers';
import HomePanel from './Components/Home/HomePanel';
const store = createStore(rootReducers);

function App() {
  return (
    <div>
      <Helmet>
        <title>EShopee</title>
      </Helmet>
      <HomePanel/>
    </div>
  );
}

export default App;
