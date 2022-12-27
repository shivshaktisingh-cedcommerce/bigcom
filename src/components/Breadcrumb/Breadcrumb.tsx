import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

export interface BreadcrumbProps {
  label?: string;
  link?: string;
}

type Props = BreadcrumbProps;

const Breadcrumb: FunctionComponent<Props> = ({ label, link = '/' }) => {
  return (
    <div className='breadcrumb'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='breadcrumb__content'>
              <Link to={link} data-testid='breadcrumb-label'>
                {label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
