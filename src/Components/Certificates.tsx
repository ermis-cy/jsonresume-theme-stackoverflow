import { ResumeSchema } from '../types/json-schema';

type CertificateProps = {
  certificates: ResumeSchema['certificates'];
};

export const Certificates = ({ certificates }: CertificateProps) => {
  return (
    <section>
      <h2>Certificates</h2>
      <ul>
        {certificates?.map((certificate, index) => (
          <li key={index}>
            <div>{certificate?.name}</div>
            <div>{certificate?.date}</div>
            <div>{certificate?.issuer}</div>
            <div>{certificate?.url}</div>
          </li>
        ))}
      </ul>
    </section>
  );
};
