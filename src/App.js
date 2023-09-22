import logo from "./logo.png";
import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          height: "100px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: "0px 16px",
          justifyContent: "space-between",
        }}
      >
        <img src={logo} height={"40px"} width={"300px"} />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "600px",
          }}
        >
          <p className="header-links">PLAN & BOOK</p>
          <p className="header-links">TRAVEL INFORMATION</p>
          <p className="header-links">EXPERIENCE</p>
          <p className="header-links">FLYSMILES</p>
        </div>
        <div>
          <p>Right section icons</p>
        </div>
      </div>
      <div className="img-container">
          <img src="https://www.discover-airlines.com/en/assets/fleet/Discover_Airlines_A330-300_2_1800x1200.jpg" className="img-plane"/>
      </div>
      <div
        style={{
          backgroundColor: "white",
          height: "100px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <p>Footer contents here</p>
      </div>
    </div>
  );
}

export default App;
