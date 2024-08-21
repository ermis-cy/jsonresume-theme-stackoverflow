import { ResumeSchema } from '../types/json-schema';

type LanguagesProps = {
  languages: ResumeSchema['languages'];
};

export const Languages = ({ languages }: LanguagesProps) => {
  return (
    <section>
      <h2>Languages</h2>
      <ul>
        {languages?.map((language, index) => (
          <li key={index}>
            <div>{language?.language}</div>
            <div>{language?.fluency}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};
