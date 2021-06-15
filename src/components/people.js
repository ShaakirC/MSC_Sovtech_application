import React from "react";

function People(props) {
  //console.log(props.list)

  if (props.list) {
    return (
      <h3 className="personList">
        {props.list.map((person) => (
          <div className="personRow" key={person.name}>
            <li>{person.name}</li>
            <button onClick={() => props.parentCallback(person.name)}>
              Click for more
            </button>
          </div>
        ))}
      </h3>
    );
  } else return null;
}

export default People;
