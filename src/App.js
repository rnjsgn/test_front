// import './App.css';
import { 
  BrowserRouter, 
  Route, 
  Routes
} from 'react-router-dom';

import { Test, Video, Watch } from './Pages';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route
              path='/'
              element = {<Test />}
            />
            <Route
              path='/video'
              element = {<Video />}
            />
            <Route 
              path='/watch'
              element = {<Watch />}
            />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
