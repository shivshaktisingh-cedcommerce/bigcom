import { Card, Stack, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import Image from 'components/Image';
import successStage from 'assets/images/successStage155.png';

type Props = {
  title: string;
};

const SetupSuccessCard: FunctionComponent<Props> = ({ title }) => {
  return (
    <Card sx={{ backgroundColor: '#F4F6F8', mb: 5 }}>
      <Stack sx={{ m: 2 }}>
        <Typography variant='h4'>{title}</Typography>
      </Stack>
      <Image
        src={successStage}
        visibleByDefault
        disabledEffect
        sx={{
          position: { sm: 'absolute' },
          top: '15px',
          right: '15px',
          objectFit: 'contain',
          width: '45px',
        }}
        alt='success'
      />
    </Card>
  );
};

export default SetupSuccessCard;
