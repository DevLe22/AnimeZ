import React from 'react'
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

const withLayout = <LP extends {}> (LayoutComponent: React.ComponentType<LP>,
    layoutProps: LP) => <WP extends {}> (WrappedComponent: React.ComponentType<WP>) => {
        return function WithLayout(props: WP): JSX.Element {
            return (
              <LayoutComponent {...layoutProps}>
                <WrappedComponent {...props} />
              </LayoutComponent>
            )
          }
};

export default withLayout;

