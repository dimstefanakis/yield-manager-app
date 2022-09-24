import { Input, Select, HStack, VStack } from "@chakra-ui/react";
import { useAtom } from "jotai";
import ConditionType from "../ConditionType";
import {
  conditionGroupsAtom,
  operationsAtom,
  ConditionInterface,
} from "../../store/yieldManager";

function Condition({ condition }: { condition: ConditionInterface }) {
  const [conditionGroups, setConditionGroups] = useAtom(conditionGroupsAtom);
  const [operations, setOperations] = useAtom(operationsAtom);

  function onChangeDataField(e: any) {
    const updatedConditionGroups = conditionGroups?.map((group) => {
      group.conditions = group.conditions.map((c) => {
        if (c.id === condition.id) {
          c.data_field = e.target.value;
        }
        return c;
      });
      return group;
    });
    if (updatedConditionGroups) {
      setConditionGroups(updatedConditionGroups);
    }
  }

  function onChangeOperator(e: any) {
    const updatedConditionGroups = conditionGroups?.map((group, i) => {
      group.conditions = group.conditions.map((c) => {
        if (c.id === condition.id) {
          return {
            ...c,
            operator: {
              value: e.target.value,
              label: e.target.value,
            },
          };
        }
        return c;
      });
      return group;
    });
    if (updatedConditionGroups) {
      setConditionGroups(updatedConditionGroups);
    }
  }

  function onChangeFilterValue(e: any) {
    const updatedConditionGroups = conditionGroups?.map((group, i) => {
      group.conditions = group.conditions.map((c) => {
        if (c.id === condition.id) {
          return {
            ...c,
            filter_value: e.target.value,
          };
        }
        return c;
      });
      return group;
    });
    if (updatedConditionGroups) {
      setConditionGroups(updatedConditionGroups);
    }
  }

  return (
    <HStack>
      <ConditionType condition={condition} />
      <Input value={condition.data_field} onChange={onChangeDataField}></Input>
      <Select value={condition.operator.value} onChange={onChangeOperator}>
        {operations?.map((operator) => {
          return (
            <option key={operator.value} value={operator.value}>
              {operator.label}
            </option>
          );
        })}
      </Select>
      <Input
        value={condition.filter_value}
        onChange={onChangeFilterValue}
      ></Input>
    </HStack>
  );
}

export default Condition;
