import SkillListItem from "./SkillListItem";


export default function SkillList(props) {
  return (
    <>
      <h3>Mad Skills</h3>
      <table>
        {props.skills.map((skill) => (
          <SkillListItem skill={skill.name} level={skill.level} />
        ))}
      </table>
    </>
  );
}
