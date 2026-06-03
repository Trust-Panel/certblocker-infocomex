// App composition
const App = () => (
  <>
    <Header/>
    <Hero/>
    <LogosStrip/>
    <Features/>
    <Steps/>
    <InforcomexPartner/>
    <FAQ/>
    <ContactSection/>
    <Footer/>
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
