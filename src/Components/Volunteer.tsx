import { ResumeSchema } from '../types/json-schema';

type VolunteerProps = {
  volunteer: ResumeSchema['volunteer'];
};

export const Volunteer = ({ volunteer }: VolunteerProps) => {
  return (
    <section>
      <h2>Volunteer</h2>
      <ul>
        {volunteer?.map((volunteerPosition, index) => (
          <li key={index}>
            <div>{volunteerPosition?.organization}</div>
            <div>{volunteerPosition?.position}</div>
            <div>{volunteerPosition?.url}</div>
            <div>{volunteerPosition?.startDate}</div>
            <div>{volunteerPosition?.endDate}</div>
            <div>{volunteerPosition?.summary}</div>
            <ul>{volunteerPosition?.highlights?.map((keyword, index) => <li key={index}>{keyword}</li>)}</ul>
          </li>
        ))}
      </ul>
    </section>
  );
};
