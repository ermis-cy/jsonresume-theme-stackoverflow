import { makeStyles } from '@griffel/react';
import { ResumeSchema } from '../../types/json-schema';
import { Location } from './Location';
import { PersonalInfo } from './PersonalInfo';
import { tokens } from '@theme';

const useClasses = makeStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  picture: {
    borderRadius: '50%',
    overflow: 'hidden',
    width: '7.5rem',
    height: '7.5rem',
    border: `0.05rem solid ${tokens.borderColor}`,
    boxShadow: `0 0 0 0.05rem ${tokens.borderColor}`
  },
  name: {
    fontSize: '2.8rem',
    fontWeight: '100',
    lineHeight: '100%'
  },
  label: {
    fontSize: '1.5rem',
    fontWeight: '300',
    lineHeight: '100%'
  },
  summary: {
    padding: '1rem',
    margin: '1rem 0',
    backgroundColor: tokens.backgroundDarker,
    color: tokens.foreground
  }
});

type BasicsProps = {
  basics: ResumeSchema['basics'];
};

export function Basics({ basics }: BasicsProps) {
  const classes = useClasses();

  return (
    <section>
      <header className={classes.header}>
        <div>
          <h1 className={classes.name}>{basics?.name}</h1>
          <h2 className={classes.label}>{basics?.label}</h2>
          <Location location={basics?.location} />
        </div>

        {basics?.image && (
          <picture className={classes.picture}>
            <img alt={basics?.name} src={basics?.image} />
          </picture>
        )}
      </header>

      <PersonalInfo
        profiles={basics?.profiles}
        info={{ email: basics?.email, phone: basics?.phone, url: basics?.url }}
      />

      <section className={classes.summary}>
        <p>{basics?.summary}</p>
      </section>
    </section>
  );
}
