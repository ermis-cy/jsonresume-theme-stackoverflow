import { makeStyles } from '@griffel/react';
import { ResumeSchema } from '../types/json-schema';
import { Basics } from './Basics/Basics';
import { Skills } from './Skills';
import { WorkExperience } from './Work';
import { Education } from './Education';
import { Volunteer } from './Volunteer';
import { Awards } from './Awards';
import { Certificates } from './Certificates';
import { Publications } from './Publications';
import { Languages } from './Languages';
import { Interests } from './Interests';
import { References } from './References';
import { Projects } from './Projects';
import { Subtitle, Title, tokens, useThemes } from '@theme';

const useStyles = makeStyles({
  root: {
    fontFamily: 'Helvetica Neue,Helvetica,Arial,Lucida Grande,sans-serif',
    fontSize: '16px',
    fontWeight: 400,
    color: tokens.foreground,
    backgroundColor: tokens.background,
    letterSpacing: 0,
    textAlign: 'left',
    padding: '1.5rem',

    '& h1': {
      ...Title
    },
    '& h2': {
      ...Subtitle
    },
    '& a': {
      color: tokens.linkColor
    }
  }
});

type ResumeProps = {
  resume: ResumeSchema;
};

export const App = ({ resume }: ResumeProps) => {
  useThemes();
  const classes = useStyles();

  return (
    <main className={classes.root}>
      <Basics basics={resume.basics} />
      <Skills skills={resume.skills} />
      <WorkExperience work={resume.work} />
      <Education education={resume.education} />
      <Volunteer volunteer={resume.volunteer} />
      <Awards awards={resume.awards} />
      <Certificates certificates={resume.certificates} />
      <Publications publications={resume.publications} />
      <Languages languages={resume.languages} />
      <Interests interests={resume.interests} />
      <References references={resume.references} />
      <Projects projects={resume.projects} />
    </main>
  );
};
