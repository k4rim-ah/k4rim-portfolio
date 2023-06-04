import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Servoffered from './components/Servoffered';
import Work from './components/Work';
import Contact from './components/Contact';
import Mario from './components/Mario';
import Giusti from './components/Giusti';
import Footer from './components/Footer';

import {Routes, Route} from 'react-router-dom'



function App() {
return (
<>
<Routes>
  <Route path="/" element={<Navbar />}>
  <Route index element={<Home />}/>
  <Route path="about" element={<About />} />
  <Route path="services" element={<Servoffered />} />
  <Route path="work" element={<Work />} />
  <Route path="contact" element={<Contact />} />
  <Route path="work/marionegri" element={<Mario />} />
  <Route path="work/giusti" element={<Giusti />} />
  </Route>

</Routes>
{/*footer */}
<Footer />
</>
)
}
export default App