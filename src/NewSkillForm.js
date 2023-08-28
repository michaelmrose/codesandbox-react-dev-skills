import { useState } from "react";

export default function NewSkillForm(props) {

const {skills, setSkills} = props
  const [newSkill, setNewSkill] = useState("");
  const [newSkillLevel, setNewSkillLevel] = useState(3);
  const handleChange= (setter)=> (evt) => {
    setter(evt.target.value)
  }
  return (
    <form>
      <label htmlFor="skillInput">Skill</label>
      <input
        id="skillInput"
        type="text"
        value={newSkill}
        onChange={handleChange(setNewSkill)}>

      </input>
      <label htmlFor="levelSelect">Level</label>
      <select 
      id="levelSelect" 
      name="level" 
      value={newSkillLevel}
      onChange={handleChange(setNewSkillLevel)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button
        type="button"
        onClick={() => setSkills([...skills, { name: newSkill, level: newSkillLevel }])}>
        ADD SKILL
      </button>
    </form>
  );
}
