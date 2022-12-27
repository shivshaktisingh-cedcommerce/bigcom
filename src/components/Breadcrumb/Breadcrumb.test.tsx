import { render, screen } from '@testing-library/react';
import RouteWrapper from 'helpers/wrappers/RouterWrapper';
import Breadcrumb from './Breadcrumb';

describe('test breadcrumb', () => {
  it('renders successfully', async () => {
    render(
      <RouteWrapper>
        <Breadcrumb label='back to home' />
      </RouteWrapper>
    );

    const items = await screen.findAllByText('back to home');
    expect(items).toHaveLength(1);
  });
});
