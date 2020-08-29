import React, { Fragment } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ProviderCategory from './context/ContextCategory';

function App() {
  return (
    <ProviderCategory>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <Form />
        </div>
      </div>
    </ProviderCategory>
  );
}

export default App;
