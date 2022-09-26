import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { Select } from "@chakra-ui/react";
import {
  conditionGroupsAtom,
  ConditionInterface,
  ConditionGroupInterface,
} from "../../store/yieldManager";
import { surveysAtom } from "../../store/surveys";
import axios from "axios";

function FilterOnSurveySelector({
  condition,
}: {
  condition: ConditionInterface;
}) {
  const [conditionGroups, setConditionGroups] = useAtom(conditionGroupsAtom);
  const [surveys, setSurveys] = useAtom(surveysAtom);

  function onChange(e: any) {
    const updatedConditionGroups = conditionGroups?.map((g) => {
      g.conditions = g.conditions.map((c) => {
        if (c.id === condition.id) {
          return {
            ...c,
            survey_id: e.target.value,
          };
        }
        return c;
      });
      return g;
    });

    if (updatedConditionGroups) {
      setConditionGroups(updatedConditionGroups);
    }
  }

  return (
    <Select onChange={onChange} w="200px">
      {surveys.map((survey: any) => (
        <option key={survey.id} value={survey.id}>
          {survey.name}
        </option>
      ))}
    </Select>
  );
}

export default FilterOnSurveySelector;
