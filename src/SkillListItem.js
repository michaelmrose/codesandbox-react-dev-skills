export default function SkillListItem(props) {
  return (
    <tr>
      <td>{props.skill}</td>{" "}
      <td>
        <span class="levelBadge">Level: {props.level}</span>
      </td>
    </tr>
  );
}
