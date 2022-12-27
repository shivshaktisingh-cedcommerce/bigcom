import { Box, Button, IconButton, Stack, useTheme } from '@mui/material';
import { useSnackbar } from 'notistack';
import { useState } from 'react';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { styled } from '@mui/material/styles';

interface OwnProps {
  embedCode: string;
  shareLink: string;
  handleOpenClose?: () => void;
}

const ShareableContainer = styled('div')<{
  $activeTab: string;
  $lightColor: string;
}>`
  .embed-text-container {
    padding: 15px;
    padding-right: 5px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .tab-buttons {
    background-color: ${(props: { $activeTab: string; $lightColor: string }) =>
      props.$activeTab === 'Embed' ? props.$lightColor : ''};
    min-width: 200px;
  }

  .embed-code-container {
    border-style: dashed;
    padding: 15px;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 7px;
    min-height: 240px;
  }

  .embed-code-container .clip-icon {
    position: absolute;
    right: 0px;
    top: 100%;
    cursor: pointer;
    transform: translateY(-50%);
  }
`;

type Props = OwnProps;
const Shareable: React.FC<Props> = ({ embedCode, shareLink }) => {
  const [activeTab, setActiveTab] = useState('Embed');
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();

  const onEmbedClick = () => {
    setActiveTab('Embed');
  };

  function copyText() {
    navigator.clipboard.writeText(embedCode.trim());
    enqueueSnackbar('Copied to Clipboard', { variant: 'success' });
  }

  return (
    <ShareableContainer
      $activeTab={activeTab}
      $lightColor={theme.palette.info.lighter}
    >
      <Stack className='embed-text-container'>
        <Button className='tab-buttons' onClick={onEmbedClick}>
          {shareLink}
        </Button>
      </Stack>
      <Stack
        direction='column'
        sx={{
          mb: 5,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            padding: '10px 25px 10px 25px',
          }}
        >
          <Stack className='embed-code-container'>
            {activeTab === 'Embed' ? (
              <div style={{ position: 'relative' }}>
                <IconButton className='clip-icon' onClick={copyText}>
                  <ContentCopyIcon fill='blue' />
                </IconButton>
                <div style={{ whiteSpace: 'pre-wrap', padding: '5px' }}>
                  {embedCode}
                </div>
              </div>
            ) : (
              ''
            )}
            {activeTab === 'Share' ? <>{shareLink}</> : ''}
          </Stack>
        </Box>
      </Stack>
    </ShareableContainer>
  );
};
export default Shareable;
