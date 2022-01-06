import "./App.css";
import imgesc from "./nader.jpg";
import Profile from "./profile/profile"

function App() {
  const fullName = "Professor Dr. Nader Masmoudi";
  const bio = "New York University mathematician and elected member of the American Society of Arts and Sciences ";
  const proffesion = "mathematical sciences ";
  const user = { name: fullName };
  const HandleName = (user) => {
    alert(`Hello Don =>  ${user}`);
  };
  return (
    <div className="App">
      <Profile
        fullName={fullName}
        bio={bio}
        profession={proffesion}
        user={user}
        HandleName={HandleName}
      >
        <img src={imgesc} alt="esc" style={{ width: "20%" }} />
      </Profile>
    </div>
  );
}

export default App;
