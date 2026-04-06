import React from 'react';

interface LiquidBlobProps {
  color: 'orange' | 'grey';
  size: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: string;
}

const LiquidBlob: React.FC<LiquidBlobProps> = ({ color, size, top, left, right, bottom, delay }) => {
  return (
    <div
      className={`blob blob-${color} rounded-full absolute pointer-events-none`}
      style={{
        width: size,
        height: size,
        top,
        left,
        right,
        bottom,
        animationDelay: delay || '0s',
      }}
    />
  );
};

export default LiquidBlob;