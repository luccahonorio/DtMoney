import { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from './hooks/UserTransactions';

Modal.setAppElement('#root')

export function App() {
  const [isNewTransacrionModalOpen, setIsNewTransacrionModalOpen] =useState(false)

  function handleOpenNewTransactionModal(){
    setIsNewTransacrionModalOpen(true)
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransacrionModalOpen(false)
  }
  return (
    <TransactionsProvider>
        <Header OnOpenNewTransactionModal={handleOpenNewTransactionModal}/>
        
        <Dashboard/>

        <NewTransactionModal 
          isOpen={isNewTransacrionModalOpen} 
          OnRequestClose={handleCloseNewTransactionModal}
        />
        
        <GlobalStyle/>
    </TransactionsProvider>
  );
}


