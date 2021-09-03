import './App.css';
import Nav from './components/nav/Nav';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="image"
          src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
          alt=""
        />
        <motion.h2
          className="hero-header"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          J<span className="header-italic">o</span>sh Warren
        </motion.h2>
      </header>
    </div>
  );
}

export default App;
