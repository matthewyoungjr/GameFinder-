import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? "dodgerblue" : "yellow";
  return (
    <Badge borderRadius="4px" fontSize="14px" paddingX={2} bgColor={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
