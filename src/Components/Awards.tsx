import { ResumeSchema } from '../types/json-schema';

type AwardProps = {
  awards: ResumeSchema['awards'];
};

export const Awards = ({ awards }: AwardProps) => {
  return (
    <section>
      <h2>Awards</h2>
      <ul>
        {awards?.map((awardPosition, index) => (
          <li key={index}>
            <div>{awardPosition?.title}</div>
            <div>{awardPosition?.date}</div>
            <div>{awardPosition?.awarder}</div>
            <div>{awardPosition?.summary}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};
