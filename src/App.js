/*
 Author: Moegamad Shaakir Cassiem
 ID: 9510115040080
 */

import "./styles/App.css";
import Person from "./components/person";
import People from "./components/people";
import { React, useState, useEffect } from "react";

//let peopleUrl = "https://swapi.dev/api/people/";
//let peoplePageUrl1 = "https://swapi.dev/api/people/?page=2";

function App() {
  const [people, setPeople] = useState(new Array(0));
  const [person, setPerson] = useState(null);
  const [value, setValue] = useState("");
  const [page, setPage] = useState(2);

  let peopleUrlPage = "https://swapi.dev/api/people/?page=" + page;

  let personUrlName = "https://swapi.dev/api/people/?search=" + value;

  useEffect(() => {
    setPerson(null);
    fetch(peopleUrlPage)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setPeople(data.results))
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [peopleUrlPage]);

  const searchByName = () => {
    setPeople(null);
    fetch(personUrlName)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setPerson(data.results))
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  const searchByPage = () => {
    setPerson(null);
    fetch(peopleUrlPage)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => setPeople(data.results))
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  };

  //useEffect(() => {
  //    searchByName();
  //}, [value]);

  const chosePerson = (x) => {
    //{ console.log(x) }
    setValue(x);
    setTimeout(() => {
      searchByName();
      //{ console.log(value) }
    }, 1000);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Search by Name:</h1>
        <input
          placeholder="Input Name..."
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={() => searchByName()}>Click</button>
        <h1>Search by Page:</h1>
        <input
          placeholder="..."
          value={page}
          onChange={(e) => setPage(e.target.value)}
        />
        <button onClick={() => searchByPage()}>Click</button>
        <People list={people} parentCallback={chosePerson} />
        <Person item={person} />
      </header>
    </div>
  );
}

export default App;
