import { HStack, VStack, Box } from "@chakra-ui/react";
import { useAtom } from "jotai";
import Condition from "../Condition";
import {
  conditionGroupsAtom,
  ConditionGroupInterface,
} from "../../store/yieldManager";

function ConditionGroup({
  conditionGroup,
}: {
  conditionGroup: ConditionGroupInterface;
}) {
  return (
    <VStack>
      {conditionGroup.conditions.map((condition, j) => {
        return <Condition key={j} condition={condition} />;
      })}
    </VStack>
  );
}

export default ConditionGroup;
