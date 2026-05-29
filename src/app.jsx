// App composition
const App = () => (
  <>
    <Header/>
    <Hero/>
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
