
import Header from "./Header"
import HomePage from "./HomePage"
import Navbar from "./Navbar"
import ProductsPage from "./ProductsPage";

import { Route, Switch} from 'wouter';

import "./styles.css"

export default function App() {
  return (<>

    {/* Self documenting code */}
    <Navbar />
    <Header />

    {/* Switch => a portion of your page
    that displays different component */}
    <Switch>
      <Route path="/" component={HomePage}/>
      <Route path="/products" component={ProductsPage}/>
    </Switch>

    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2023 E-Shop. All rights reserved.</p>
      </div>
    </footer>

  </>)
}