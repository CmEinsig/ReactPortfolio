import About from './components/pages/AboutMe';
import Contact from './components/pages/ContactMe';
import Footer from './components/footer';
import Header from './components/header';
import Portfolio from './components/pages/Portfolio'
import Resume from './components/pages/Resume';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header>
       
        </Header>

        <Routes>
          {/* Routes to the pages */}
          <Route path='/' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Portfolio' element={<Portfolio />} />
          <Route path='/Resume' element={<Resume />} />
        </Routes>



        <Footer>
          {/* static components */}
        </Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;