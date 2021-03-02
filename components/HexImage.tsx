export interface HexImageProps {
  src: string;
}

export let HexImage: React.FC<HexImageProps> = (props) => {
  let { src, ...rest } = props;

  return (
    <svg {...rest} viewBox="0 0 5 5">
      <clipPath id="mask">
        <path d="M.9.7q.2-.5.8-.5l1.6 0q.5 0 .8.5l.8 1.4q.2.5 0 .9l-.8 1.4q-.2.5-.8.5h-1.6q-.5 0-.8-.5l-.8-1.4q-.2-.5 0-.9l.8-1.4z" />
      </clipPath>
      <image
        href={src}
        width="100%"
        height="100%"
        clipPath="url(#mask)"
        preserveAspectRatio="xMidYMid slice"
      />
    </svg>
  );
};
