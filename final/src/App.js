// ROOT COMPONENT 

// import logo from './logo.svg'; 

// import './App.css';
import Navbar from './Navbar';
import Home from './Home';

//  21 - REACT ROUTER 
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// 22 - EXACT MATCH ROUTES 
import Create from './Create';
// 25 -     ROUTE PARAMETERS
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';



function App() {
  return (
// 21 - REACT ROUTER 
    <Router>
          {/*  ROOT COMPONENT, other components will be nested inside APP */}
      <div className="App">
        <Navbar />     {/*self closing */}
        <div className="content">
          {/* <Home /> */}
          <Switch>
            {/* set individual route  */}
               <Route exact path = "/">  {/* home */}
               <Home />
              </Route>

{/* shows the same page because it sees it as match for '/' since it exists in '/create' hence it gives home page  */}
{/* to over come this we will use 'exact' with '/' */}
{/* 22 - EXACT MATCH ROUTES  */}
               <Route path = "/create">  {/* create */}
               <Create />
              </Route>

{/* 25 -     ROUTE PARAMETERS */}
               <Route path = "/blogs/:id">  {/* blogs for each id */}
               <BlogDetails />
              </Route>

{/* 32 - 404 ERROR & NEXT STEPS  */}
               <Route path = "*">  {/* catch any other route */}
               <NotFound />
              </Route>
              
            </Switch>
        </div>
      </div>
    </Router>


  );
}

export default App;
