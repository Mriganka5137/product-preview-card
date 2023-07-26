import "./App.css";
import banner from "./image-product-desktop.jpg";
import banner2 from "./image-product-mobile.jpg";
import icon from "./icon-cart.svg";

function App() {
  return (
    <div className="card">
      <img className="image-box" src={banner} alt="banner" />
      <img className="image-box2" src={banner2} alt="banner" />

      <div className="content">
        <p className="category">PERFUME</p>
        <h2>Gabriele Essence Eau De Perfum</h2>
        <p className="desc">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.{" "}
        </p>
        <div className="price-container">
          <p className="price">$149.99</p>
          <span className="main-price">$169.99</span>
        </div>
        <button className="btn">
          <img src={icon} alt="icon" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}

export default App;
