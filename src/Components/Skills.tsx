import { ResumeSchema } from '../types/json-schema';

type SkillsProps = {
  skills: ResumeSchema['skills'];
};

export function Skills({ skills }: SkillsProps) {
  return (
    <section>
      <h2>Skills</h2>
      <ul>
        {skills?.map((skill, index) => (
          <li key={index}>
            <div>{skill?.name}</div>
            <div>{skill?.level}</div>
            <ul>{skill?.keywords?.map((keyword, index) => <li key={index}>{keyword}</li>)}</ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
