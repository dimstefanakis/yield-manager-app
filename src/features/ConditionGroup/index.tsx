import {
  HStack,
  Select,
  Heading,
  VStack,
  Box,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useAtom } from "jotai";
import Condition from "../Condition";
import {
  conditionGroupsAtom,
  ConditionGroupInterface,
  ConditionInterface
} from "../../store/yieldManager";
import { v4 as uuidv4 } from "uuid";

function ConditionGroup({
  conditionGroup,
}: {
  conditionGroup: ConditionGroupInterface;
}) {
  const [conditionGroups, setConditionGroups] = useAtom(conditionGroupsAtom);

  function addNewCondition() {
    const newCondition: ConditionInterface = {
      id: uuidv4(),
      data_field: "",
      operator: {
        value: "eq",
        label: "Equals",
      },
      type: 'survey',
      filter_value: "",
    };
    const updatedConditionGroups = conditionGroups?.map((group, i) => {
      if (group.id === conditionGroup.id) {
        group.conditions.push(newCondition);
      }
      return group;
    });
    if (updatedConditionGroups) {
      setConditionGroups(updatedConditionGroups);
    }
  }

  function onMatchTypeChange(e: any) {
    const updatedConditionGroups = conditionGroups?.map((group) => {
      if (group.id === conditionGroup.id) {
        group.childrenMatchType = e.target.value;
      }
      return group;
    });
    if (updatedConditionGroups) {
      setConditionGroups(updatedConditionGroups);
    }
  }

  return (
    <Flex flexFlow="column" m={10} p={5} boxShadow="md">
      <Select onChange={onMatchTypeChange}>
        <option value="and">All conditions should match</option>
        <option value="or">Only one condition should match</option>
      </Select>
      <VStack my={10}>
        {conditionGroup.conditions.map((condition, i) => {
          return <Condition key={condition.id} condition={condition} />;
        })}
      </VStack>
      <Button onClick={addNewCondition}>Add new condition</Button>
    </Flex>
  );
}

export default ConditionGroup;
