import React from 'react';

function Badge({ content }) {
  const colors = [
    '#854ff7',
    '#ff649e',
    '#2674fa',
    '#ff1443',
    '#4BA3F6',
    '#F8D25A',
    '#0B5FF7',
    '#DD4A33',
  ];
  const style = {
    backgroundColor: colors[content.length % colors.length],
  };
  return (
    <div className="badge" style={style}>
      <span>{content}</span>
    </div>
  );
}

export default Badge;
