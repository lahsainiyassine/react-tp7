import React from 'react';

/**
 * Higher-Order Component qui injecte ou affiche un timestamp au rendu.
 */
function withTimestamp(WrappedComponent) {
  return function WithTimestampComponent(props) {
    const timestamp = props.timestamp || new Date().toLocaleTimeString();

    return (
      <div className="with-timestamp-container">
        <WrappedComponent {...props} timestamp={timestamp} />
        <p className="timestamp-info">
          <small>Rendu à : {timestamp}</small>
        </p>
      </div>
    );
  };
}

export default withTimestamp;
