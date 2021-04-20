export interface SquircleProps {
  width: number;
  height: number;
}

export let Squircle: React.FC<SquircleProps> = (props) => {
  let { width, height } = props;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height} fill="#fff">
      <path d={generateBox(width, height, 75)} />
    </svg>
  );
};

function generateBox(width: number, height: number, r = height / 2): string {
  let h2 = height / 2;
  let dr = Math.min(h2, Math.max(0, r));

  return `
  M0 ${h2}
  c0 -${dr} ${h2 - dr} -${h2} ${h2} -${h2}
  H${width - h2}
  c${dr} 0 ${h2} ${h2 - dr} ${h2} ${h2}
  s-${h2 - dr} ${h2} -${h2} ${h2}
  H${h2}
  c-${dr} 0 -${h2} -${h2 - dr} -${h2} -${h2}
  `;
}
