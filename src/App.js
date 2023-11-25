import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [utilisateurs, setutilisateurs] = useState([]);
  const [articles, setarticles] = useState([]);
  const [useractif, setuseractif] = useState(0);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setutilisateurs(data));

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setarticles(data));
  }, []);

  function handleclick(id) {
    setuseractif(id);
  }

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h4>exemple de consommation des apis</h4>
      <h1>liste des utilisateurs</h1>
      {utilisateurs.map((utilisateur, index) => {
        return (
          <div key={index}>
            <p>{utilisateur.name}</p>
            <button onClick={() => handleclick(utilisateur.id)}>details</button>
            <div>
              {useractif === utilisateur.id ? (
                <ul>
                  {articles
                    .filter((item) => item.userId === useractif)
                    .map((article) => (
                      <li key={article.id}>{article.title}</li>
                    ))}
                </ul>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
