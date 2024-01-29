import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createStore } from 'react';z
import { Provider } from 'react';
import appReducer from './appReducer';
import FormPage from './FormPage';
import DisplayPage from './DisplayPage';

const store = createStore(appReducer);

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/form" element={<FormPage />} />
                    <Route path="/display" element={<DisplayPage />} />
                </Routes>
            </Router>
        </Provider>
    );
};

export default App;
