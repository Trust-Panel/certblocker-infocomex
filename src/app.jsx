// App composition
const App = () => (
  <>
    <Header/>
    <Hero/>
    <Features/>
    <Product/>
    <Steps/>
    <InforcomexPartner/>
    <FAQ/>
    <FinalCTA/>
    <Footer/>
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
