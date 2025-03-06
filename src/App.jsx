
import Header from "./Header"
import HomePage from "./HomePage"
import Navbar from "./Navbar"
import ProductsPage from "./ProductsPage";

import { Route, Switch} from 'wouter';

import "./styles.css"
import RegisterPage from "./RegisterPage";

import { useFlashMessage } from "./FlashMessageStore";

import { useEffect } from "react";

export default function App() {

  const { getMessage, clearMessage} = useFlashMessage();
  const flashMessage = getMessage();

  // when the component is rendered for the first time (aka "mounted")
  // start a timer that will make any flash message disappears
  useEffect(()=>{
    
    // 1. start the timer
    const timer = setTimeout(()=>{
      clearMessage();
    }, 3000);

    // 2. the cleanup
    // the arrow function is called when the
    // effect ends or if the effect is triggered again
    return () => {
      clearTimeout(timer);
    }


  }, [flashMessage]); // if the flashMessage ever changes, set the timer

  return (<>

    {/* Self documenting code */}
    <Navbar />

    {
      flashMessage.message &&  (
        <div className={`alert alert-${flashMessage.type} m-2`}>
          {flashMessage.message}
        </div>
      )
    }

    <Header />

    {/* Switch => a portion of your page
    that displays different component */}
    <Switch>
      <Route path="/" component={HomePage}/>
      <Route path="/products" component={ProductsPage}/>
      <Route path="/register" component={RegisterPage}/>
    </Switch>

    <footer className="bg-dark text-white text-center py-3">
      <div className="container">
        <p>&copy; 2023 E-Shop. All rights reserved.</p>
      </div>
    </footer>

  </>)
}