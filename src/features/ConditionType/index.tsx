import { useAtom } from "jotai";
import { Flex, Input, Select } from "@chakra-ui/react";
import {
  conditionGroupsAtom,
  ConditionInterface,
} from "../../store/yieldManager";

function ConditionType({ condition }: { condition: ConditionInterface }) {
  const [conditionGroups, setConditionGroups] = useAtom(conditionGroupsAtom);

  function onChange(e: any) {
    const updatedConditionGroups = conditionGroups?.map((group) => {
      group.conditions = group.conditions.map((c) => {
        if (c.id == condition.id) {
          return {
            ...c,
            type: e.target.value,
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
    <Select w="fit-content" placeholder="Filter based on" onChange={onChange}>
      <option value="profile">Users profile</option>
      <option value="survey_js_answer">An answer to a survey</option>
    </Select>
  );
}

export default ConditionType;
