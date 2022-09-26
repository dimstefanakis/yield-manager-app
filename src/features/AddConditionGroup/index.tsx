import { useAtom } from "jotai";
import { IconButton, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { conditionGroupsAtom, ConditionGroupInterface } from "../../store/yieldManager";
import { v4 as uuidv4 } from "uuid";

function AddConditionGroup() {
  const [conditionGroups, setConditionGroups] = useAtom(conditionGroupsAtom);

  function addConditionGroup() {
    const newConditionGroup: ConditionGroupInterface = {
      id: uuidv4(),
      childrenMatchType: "and",
      conditions: [
        {
          data_field: "age",
          operator: {
            value: "eq",
            label: "Equal to",
          },
          filter_value: "18",
          filter_end_value: "18",
          type: "survey_js_answer",
          survey: "",
        },
      ],
      survey: null,
    };
    if (conditionGroups) {
      setConditionGroups([...conditionGroups, newConditionGroup]);
    }
  }

  console.log("conditionGroups", conditionGroups);
  return (
    <Button mx={10} aria-label="Add new condition group" onClick={addConditionGroup}>
      Add new condition group
    </Button>
  );
}

export default AddConditionGroup;
