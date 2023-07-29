import "./App.css";
function App() {
  return (
    <main>
      <div class="avatardiv">
        <div class="para">
          <h4>Join our newsletter</h4>
        </div>
        <div class="container">
          <input type="text" placeholder="Enter your email" />
          <button>Sign up</button>
        </div>
        <div class="checkcontainer">
          <input type="checkbox" />
          <p>send me occasional promotional email</p>
        </div>
      </div>
    </main>
  );
}

export default App;
