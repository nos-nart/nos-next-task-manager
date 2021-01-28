type Props = {
  label?: string;
  symbol: any;
};

export const Emoji: React.FC<Props> = ({ label, symbol }) => {
  return (
    <span
      className="emoji"
      role="img"
      aria-label={label || ``}
      aria-hidden={label ? `false` : `true`}
    >
      {symbol}
    </span>
  );
};
