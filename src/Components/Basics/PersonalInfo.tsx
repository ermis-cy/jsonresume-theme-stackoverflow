import { ResumeSchema } from '../../types/json-schema';

type PersonalInfoProps = {
  profiles: NonNullable<ResumeSchema['basics']>['profiles'];
  info: {
    email?: string;
    phone?: string;
    url?: string;
  };
};

export function PersonalInfo({ profiles, info }: PersonalInfoProps) {
  return (
    <section>
      <h2>Personal Info</h2>
      <div>
        <div>{info.email}</div>
        <div>{info.phone}</div>
        <div>{info.url}</div>
      </div>
      {profiles?.map((profile, index) => (
        <div key={index}>
          <div>
            {profile.network} <a href={profile.url}>{profile.username}</a>
          </div>
        </div>
      ))}
    </section>
  );
}
