import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      {/* Header Component */}
      <Header />

      {/* Spacer to avoid content being hidden behind the fixed header */}
      <div className="mt-16"></div>

      {/* Home Component */}
      <Home />
      <div className="min-h-screen flex items-center justify-center">
  <About />
</div>
      <Footer/>
    </div>
  );
}

export default App;
