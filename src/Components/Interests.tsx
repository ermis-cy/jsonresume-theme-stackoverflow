import { ResumeSchema } from '../types/json-schema';

type InterestsProps = {
  interests: ResumeSchema['interests'];
};

export const Interests = ({ interests }: InterestsProps) => {
  return (
    <section>
      <h2>Interests</h2>
      <ul>
        {interests?.map((interest, index) => (
          <li key={index}>
            <div>{interest?.name}</div>
            <div>{interest?.keywords?.join(', ')}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};
