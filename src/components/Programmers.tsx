import React from "react";

interface programmers {
  name: string;
  ProgrammingLanguages: Array<string>;
  workingExperienceYears: number;
  companyName: string;
}
function Programmers(props:programmers) {
  return (
    <div>
      <h2>Name :<span>{` ${props.name}`}</span></h2> 
      <h2>Programming Languages :<span>{props.ProgrammingLanguages}</span></h2>
      <h2> Working Experience : <span>{props.workingExperienceYears}</span> </h2>
      <h2> Company : <span>{props.companyName}</span></h2>
      <hr />
    </div>
  );
}

export default Programmers;
