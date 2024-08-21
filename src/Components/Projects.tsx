import { ResumeSchema } from '../types/json-schema';

type ProjectsProps = {
  projects: ResumeSchema['projects'];
};

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section>
      <h2>Projects</h2>
      <ul>
        {projects?.map((project, index) => (
          <li key={index}>
            <div>{project?.name}</div>
            <div>{project?.description}</div>
            <div>{project?.url}</div>
            <div>{project?.keywords?.join(', ')}</div>
            <div>{project?.startDate}</div>
            <div>{project?.endDate}</div>
            <div>{project?.type}</div>
            <div>{project?.entity}</div>
            <ul>{project?.highlights?.map((highlight, index) => <li key={index}>{highlight}</li>)}</ul>
            <ul>{project?.roles?.map((role, index) => <li key={index}>{role}</li>)}</ul>
          </li>
        ))}
      </ul>
    </section>
  );
};
