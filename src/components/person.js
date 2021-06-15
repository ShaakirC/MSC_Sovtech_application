import React from "react";

function Person(props) {
  if (props.item) {
    return (
      <div className="person">
        <h2>Person:</h2>
        <Item t1={"Name"} t2={props.item[0].name} />
        <Item t1={"Height"} t2={props.item[0].height} />
        <Item t1={"Mass"} t2={props.item[0].mass} />
        <Item t1={"Gender"} t2={props.item[0].gender} />
        <Item t1={"Homeworld"} t2={props.item[0].homeworld} />
      </div>
    );
  } else return null;
}

function Item(props) {
  return (
    <div className="row">
      <h4 className="t1">{props.t1}</h4>
      <h4 className="t2">{props.t2}</h4>
    </div>
  );
}

export default Person;
