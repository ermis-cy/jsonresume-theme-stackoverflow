import { ResumeSchema } from '../types/json-schema';

type EducationProps = {
  education: ResumeSchema['education'];
};

export function Education({ education }: EducationProps) {
  return (
    <section>
      <h2>Education</h2>
      <ul>
        {education?.map((edu, index) => (
          <li key={index}>
            <div>{edu?.institution}</div>
            <div>{edu?.url}</div>
            <div>{edu?.area}</div>
            <div>{edu?.startDate}</div>
            <div>{edu?.endDate}</div>
            <div>{edu?.score}</div>
            <ul>{edu?.courses?.map((keyword, index) => <li key={index}>{keyword}</li>)}</ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
