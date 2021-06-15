/*
 Author: Moegamad Shaakir Cassiem
 ID: 9510115040080

A note to the invidulators:

I have never used nor heard of Apollo, GraphQL, Typescript nor Centralized State Management before.
I spent the first two days learning about it and I think given a week or two more with an experienced mentor,
I would have been able to learn enough to implement this project within those stipulations.
Unfortunately, I was unable to execute within the next few days and decided to use the time left to rather
implement the assignment with methods I was already somewhat familiar with. This too took a while since I've
never pulled from an open api before so I had to do some learning for that part. I also wish I had more time
to work on the styling but I decided to prioritize the functionality as far as I could.

Thank you for the opportunity to submit this showcase of my current abilities and for indirectly opening my 
eyes to these other interesting technologies that I never knew about. I look forward to learning about them
in my spare time.

Features  not implemented:
-Use of Apollo, GraphQL, Typescript and Centralized State Management (Redux/Context API/Recoil)
-Thorough styling of the site
-Any animations (for which my skills are still very novice)
-The feature of selecting a person from the page view has a bug I couldn't figure out in time.
    (the selected person is one selection behind the current selection when clicking on a person.
    An easy fix I'm sure)
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
