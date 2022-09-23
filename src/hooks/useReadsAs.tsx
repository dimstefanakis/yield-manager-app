import { Box, Text } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { yieldManagerAtom, conditionGroupsAtom } from "../store/yieldManager";
import { currentSurveyAtom } from "../store/surveys";

function useReadsAs() {
  const [yieldManager] = useAtom(yieldManagerAtom);
  const [conditionGroups] = useAtom(conditionGroupsAtom);
  const [currentSurvey] = useAtom(currentSurveyAtom);

  function conditionsStringBuilder() {
    let conditionsString = <Text></Text>;

    conditionGroups?.map((group, i) => {
      group.conditions.map((condition, i) => {
        conditionsString = (
          <Text>
            {conditionsString}
            {`${group.childrenMatchType} ${
              condition.data_field
            } ${condition.operator.label.toLowerCase()} ${
              condition.filter_value
            }`}
          </Text>
        );
      });
      conditionsString = (
        <Text>
          {conditionsString} <Box as="br"></Box>
        </Text>
      );
    });
    return conditionsString;
  }

  return (
    <Box>
      {currentSurvey?.name} will only be shown if {conditionsStringBuilder()}
    </Box>
  );
}

export default useReadsAs;
