interface Props extends React.SVGProps<SVGSVGElement> {}

const IconClose = ({ ...rest }: Props) => {
  return (
    <svg width="17" height="17" viewBox="3 3 18 18" {...rest}>
      <path
        d="m13.6 12 6.215-6.215a1.463 1.463 0 0 0 0-2.06 1.463 1.463 0 0 0-2.06 0l-6.215 6.216-6.215-6.216a1.457 1.457 0 0 0-2.488 1.03c0 .374.146.747.428 1.03L9.53 12l-6.216 6.216a1.457 1.457 0 0 0-.428 1.03 1.457 1.457 0 0 0 2.488 1.03l6.215-6.216 6.216 6.215a1.463 1.463 0 0 0 2.06 0 1.463 1.463 0 0 0 0-2.06L13.647 12Z"
        fill="#d6d6d6"
        fill-rule="evenodd"
      />
    </svg>
  );
};

export default IconClose;
