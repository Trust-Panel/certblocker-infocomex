// App composition
const App = () => (
  <>
    <Header/>
    <Hero/>
    <PoweredByInfocomex/>
    <LogosStrip/>
    <Features/>
    <Product/>
    <ArSection/>
    <Steps/>
    <Pricing/>
    <FAQ/>
    <FinalCTA/>
    <Footer/>
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
