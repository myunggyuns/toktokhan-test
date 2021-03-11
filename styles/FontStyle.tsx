type Props = {
  size: number;
  lineHeight: number;
  weight: string;
};

export const FontStyle = ({ size, lineHeight, weight }: Props) => {
  return {
    "font-size": size,
    "line-height": lineHeight,
    "font-weight": weight,
  };
};
