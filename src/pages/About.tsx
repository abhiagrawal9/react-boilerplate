import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import packageJson from '../../package.json';
import { useDocumentTitle } from '../hooks/custom-hooks';

const About: FC = () => {
  useDocumentTitle('About');

  return (
    <Stack>
      <Typography gutterBottom variant='h5'>
        {packageJson.name}
      </Typography>
      <Typography>Version {packageJson.version}</Typography>
    </Stack>
  );
};

export default About;
