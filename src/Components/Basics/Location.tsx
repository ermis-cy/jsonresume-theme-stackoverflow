import { makeStyles } from '@griffel/react';
import { ResumeSchema } from '../../types/json-schema';

const useStyles = makeStyles({
  root: {
    padding: '0.275rem 0'
  }
});

type LocationProps = {
  location: NonNullable<ResumeSchema['basics']>['location'];
};

export function Location({ location }: LocationProps) {
  const classes = useStyles();

  return (
    <address className={classes.root}>
      {location?.city}, {location?.region} ({location?.countryCode})
    </address>
  );
}
