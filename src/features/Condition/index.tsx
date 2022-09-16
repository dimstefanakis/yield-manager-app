import { Input, Select, HStack, VStack } from "@chakra-ui/react";
import { useAtom } from "jotai";
import {
  conditionGroupsAtom,
  operationsAtom,
  ConditionInterface,
} from "../../store/yieldManager";

function Condition({ condition }: { condition: ConditionInterface }) {
  const [conditionGroups, setConditionGroups] = useAtom(conditionGroupsAtom);
  const [operations, setOperations] = useAtom(operationsAtom);

  return (
    <HStack>
      <Input value={condition.data_field}></Input>
      <Select>
        {operations?.map((operator, k) => {
          return (
            <option key={k} value={operator.value}>
              {operator.label}
            </option>
          );
        })}
      </Select>
      <Input value={condition.filter_value}></Input>
    </HStack>
  );
}

export default Condition;
