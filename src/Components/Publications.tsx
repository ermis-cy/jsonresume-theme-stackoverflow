import { ResumeSchema } from '../types/json-schema';

type PublicationsProps = {
  publications: ResumeSchema['publications'];
};

export const Publications = ({ publications }: PublicationsProps) => {
  return (
    <section>
      <h2>Publications</h2>
      <ul>
        {publications?.map((publication, index) => (
          <li key={index}>
            <div>{publication?.name}</div>
            <div>{publication?.publisher}</div>
            <div>{publication?.releaseDate}</div>
            <div>{publication?.url}</div>
            <div>{publication?.summary}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};
