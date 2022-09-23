import { useAtom } from "jotai";
import { IconButton, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { conditionGroupsAtom } from "../../store/yieldManager";
import { v4 as uuidv4 } from "uuid";

function AddConditionGroup() {
  const [conditionGroups, setConditionGroups] = useAtom(conditionGroupsAtom);

  function addConditionGroup() {
    const newConditionGroup = {
      id: uuidv4(),
      childrenMatchType: 'and',
      conditions: [
        {
          data_field: "age",
          operator: {
            value: "eq",
            label: "Equal to",
          },
          filter_value: "18",
          filter_end_value: "18",
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
