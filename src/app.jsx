// App composition
const App = () => (
  <>
    <Header/>
    <Hero/>
    <StatsBand/>
    <Platform/>
    <Features/>
    <Enterprise/>
    <Steps/>
    <InforcomexPartner/>
    <FAQ/>
    <ContactSection/>
    <Footer/>
  </>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
