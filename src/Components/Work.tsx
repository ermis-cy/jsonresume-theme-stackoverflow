import { ResumeSchema } from '../types/json-schema';

type WorkProps = {
  work: ResumeSchema['work'];
};

export function WorkExperience({ work }: WorkProps) {
  return (
    <section>
      <h2>Work Experience</h2>
      <ul>
        {work?.map((workPosition, index) => (
          <li key={index}>
            <div>{workPosition?.name}</div>
            <div>{workPosition?.position}</div>
            <div>{workPosition?.url}</div>
            <div>{workPosition?.startDate}</div>
            <div>{workPosition?.endDate}</div>
            <div>{workPosition?.summary}</div>
            <ul>{workPosition?.highlights?.map((keyword, index) => <li key={index}>{keyword}</li>)}</ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
