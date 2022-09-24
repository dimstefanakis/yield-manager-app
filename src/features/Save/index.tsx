import { Button, Flex } from "@chakra-ui/react";
import { useAtom } from "jotai";
import {
  conditionGroupsAtom,
  yieldManagerAtom,
} from "../../store/yieldManager";
import { currentSurveyAtom } from "../../store/surveys";
import { postYieldManager } from "../../queries/postYieldManager";

function Save() {
  const [conditionGroups, setConditionGroups] = useAtom(conditionGroupsAtom);
  const [currentSurvey, setCurrentSurvey] = useAtom(currentSurveyAtom);
  const [yieldManager, setYieldManager] = useAtom(yieldManagerAtom);

  async function handleSave() {
    if (currentSurvey) {
      const data = buildPostData();
      const response = await postYieldManager(currentSurvey?.id, data);
    }
  }

  function buildPostData() {
    let data = conditionGroups?.map((group) => {
      return {
        type: group.childrenMatchType,
        conditions: group.conditions.map((condition) => {
          return {
            filter_value: condition.filter_value,
            filter_end_value: condition.filter_end_value,
            operator: condition.operator.value,
            data_field: condition.data_field,
          };
        }),
      };
    });

    return data;
  }

  return (
    <Flex justifyContent="center" my={10}>
      <Button onClick={handleSave}>Save</Button>
    </Flex>
  );
}

export default Save;
