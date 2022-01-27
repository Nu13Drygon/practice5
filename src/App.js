import './App.css';
// components
import Nav from './components/Nav'
import Email from './components/email';
import Features from './components/feature-list';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Email />
      <Features />
    </div>
  );
}

export default App;
