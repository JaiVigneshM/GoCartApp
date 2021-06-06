import './App.css';
import Header from './components/header';

function App() {

  const headerBackground = "yellow";
  const navigationLinks = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Orders",
      path: "/orders"
    }
  ]
  return (
    <Header color={headerBackground} links={navigationLinks}></Header>
  );
}

export default App;
