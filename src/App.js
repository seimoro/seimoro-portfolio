import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Registration from './pages/registration/registration';
import HomePage from './pages/homepage/homepage';
import UserCard from './pages/userCard/userCard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient()

function App() {

  return (
    
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router>
          <Routes>
            <Route path='/home' element={<HomePage />}></Route>
            <Route exact path='/' element={<Registration />}></Route>
            <Route path='/user/:id' element={<UserCard />}></Route>
          </Routes>
        </Router>

      </div>
    </QueryClientProvider>
  );
}

export default App;
