import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import CategoryProvider from './context/CategoryContext';
import RecipiesProvider from './context/RecipiesContext';
import RecipiesList from './components/RecipiesList';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <CategoryProvider>
      <RecipiesProvider>
        <ModalProvider>
        <Header />
          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <RecipiesList />
          </div>
        </ModalProvider>
      </RecipiesProvider>
    </CategoryProvider>
  );
}

export default App;
