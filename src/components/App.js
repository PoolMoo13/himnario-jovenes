import 'bulma/css/bulma.min.css';
import { 
  Container,
  Navbar,
 } from 'react-bulma-components';

import './App.css'

function App({ children }) {
  return (
    <Container>

      {/* NAVBAR */}
      <Navbar>
        <Navbar.Brand>
          <Navbar.Item href="/">
            <img
              alt="Bulma: a modern CSS framework based on Flexbox"
              height="100"
              src="/logo-himnario.png"
            />
          </Navbar.Item>
        </Navbar.Brand>
      </Navbar>

      {
        children
      }      
    </Container>
  );
}

export default App;
