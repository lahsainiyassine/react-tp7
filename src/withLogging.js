import React from 'react';

function withLogging(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log('Props reçues :', props);
    return <WrappedComponent {...props} />;
  };
}

export default withLogging;
