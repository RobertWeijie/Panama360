import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import WeeklyVideo from './pages/WeeklyVideo';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';
import BlogDetail from './pages/BlogDetail';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import ScrollToTopButton from './components/ScrollToTopButton';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/weekly-video" component={WeeklyVideo} />
          <Route exact path="/blog" component={Blog} />
          <Route path="/blog/:id" component={BlogDetail} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
        <ScrollToTopButton />
      </Router>
    </ThemeProvider>
  );
}

export default App;