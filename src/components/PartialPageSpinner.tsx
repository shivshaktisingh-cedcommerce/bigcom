import styled from '@emotion/styled';
import React from 'react';
import palette from 'theme/palette';

interface SpinnerContainerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  center?: boolean;
}

const SpinnerContainer = styled('div')<{ $center: boolean }>`
  display: flex;
  text-align: center;

  min-height: ${p => (p.$center ? '350px' : '40px')};
  justify-content: center;
  align-items: ${p => (p.$center ? 'center' : 'flex-start')};

  .line {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background-color: ${palette.dark.primary.main};
  }

  .load-3 .line:nth-last-of-type(1) {
    animation: loadingC 0.6s 0.1s linear infinite;
  }
  .load-3 .line:nth-last-of-type(2) {
    animation: loadingC 0.6s 0.2s linear infinite;
  }
  .load-3 .line:nth-last-of-type(3) {
    animation: loadingC 0.6s 0.3s linear infinite;
  }

  @keyframes loadingC {
    0 {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

const PartialPageSpinner: React.FC<SpinnerContainerProps> = ({
  center = true,
  ...rest
}) => {
  return (
    <SpinnerContainer $center={center}>
      <div className='load-wrapp' {...rest}>
        <div className='load-3'>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
      </div>
    </SpinnerContainer>
  );
};

export default PartialPageSpinner;
