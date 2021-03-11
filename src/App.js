// import logo from './logo.svg';
// import './App.css';
import Header from "./components/Header";
import Layout from "./components/Layout";
import bg1 from './assets/img/bg1.jpg'
import bg2 from './assets/img/bg2.jpg'
import bg3 from './assets/img/bg3.jpg'

function App() {
  return (
    <>
      <Header title="i'm a title"/>
      <Layout title="tilte#1" desc="lorem" urlBg={bg1} />
      <Layout title="tilte#1" desc="lorem"  colorBg="#e2e2e2"/>
      <Layout title="tilte#1" desc="lorem" urlBg={bg3} />
    </>
  );
}

export default App;
