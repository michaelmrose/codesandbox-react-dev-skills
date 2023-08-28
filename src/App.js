import { useState } from "react";
import "./styles.css";
import SkillList from "./SkillList.js";
import NewSkillForm from "./NewSkillForm.js";

const skillList = [
  { name: "HTML", level: 5 },
  { name: "CSS", level: 2 },
  { name: "Clojure", level: 2 },
  { name: "JavaScript", level: 3 },
  { name: "Python", level: 2 }
];

export default function App() {
const [skills, setSkills] = useState(skillList)
  return (
    <div className="App">
      <h1>React Dev Skills</h1>
      <SkillList skills={skills}/>
      <hr />
      <NewSkillForm skills={skills} setSkills={setSkills}/>
    </div>
  );
}
