import { ResumeSchema } from '../types/json-schema';

type ReferencesProps = {
  references: ResumeSchema['references'];
};

export const References = ({ references }: ReferencesProps) => {
  return (
    <section>
      <h2>References</h2>
      <ul>
        {references?.map((reference, index) => (
          <li key={index}>
            <div>{reference?.name}</div>
            <div>{reference?.reference}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};
