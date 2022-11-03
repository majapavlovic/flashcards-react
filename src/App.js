import './App.css';
import AllFlashcards from './components/AllFlashcards';
import Navigation from './components/Navigation';
import AddQuestion from './components/AddQuestion';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [flashcards, setFlashcards] = useState([
    {
      id: 1,
      question: "what is a cell?",
      answer:
        " the basic membrane-bound unit that contains the fundamental molecules of life and of which all living things are composed.",
    },
    {
      id: 2,
      question: "What is the capital city of Serbia?",
      answer: "Belgrade",
    },
    {
      id: 3,
      question: "What started World War 2 and why?",
      answer:
        "Hitler's invasion of Poland in September 1939 drove Great Britain and France to declare war on Germany, marking the beginning of World War II",
    },
  ]);

  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route 
        path='/' 
        element={<AllFlashcards flashcards={flashcards}/>} 
        />
        <Route
        path='/add-question'
        element={<AddQuestion/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
