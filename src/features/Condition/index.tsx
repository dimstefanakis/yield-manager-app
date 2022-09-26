import { useState, useEffect } from "react";
import { Input, Select, Flex, HStack, VStack } from "@chakra-ui/react";
import { useAtom } from "jotai";
import ConditionType from "../ConditionType";
import FilterOnSurveySelector from "../FilterOnSurveySelector";
import Autocomplete from "../../flat/Autocomplete";
import {
  conditionGroupsAtom,
  operationsAtom,
  ConditionInterface,
} from "../../store/yieldManager";

function Condition({ condition }: { condition: ConditionInterface }) {
  const [conditionGroups, setConditionGroups] = useAtom(conditionGroupsAtom);
  const [operations, setOperations] = useAtom(operationsAtom);
  const [options, setOptions] = useState<string[]>([]);

  useEffect(()=>{
    if(condition.type === 'survey_js_answer'){
      const survey = condition.survey;
      if(survey){
        
      }
    }
  }, [condition])

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
    <Flex w="100%">
      <ConditionType condition={condition} />
      {condition.type === "survey_js_answer" && (
        <FilterOnSurveySelector condition={condition} />
      )}
      <Input
        mx="4"
        w="150px"
        value={condition.data_field}
        onChange={onChangeDataField}
      ></Input>
      <Select
        mx="4"
        w="150px"
        value={condition.operator.value}
        onChange={onChangeOperator}
      >
        {operations?.map((operator) => {
          return (
            <option key={operator.value} value={operator.value}>
              {operator.label}
            </option>
          );
        })}
      </Select>
      <Input
        mx="4"
        w="150px"
        value={condition.filter_value}
        onChange={onChangeFilterValue}
      ></Input>
    </Flex>
  );
}

export default Condition;
