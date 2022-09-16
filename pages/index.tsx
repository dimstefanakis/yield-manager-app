import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Flex } from "@chakra-ui/react";
import { useAtom } from "jotai";
import styles from "../styles/Home.module.css";
import ConditionGroup from "../src/features/ConditionGroup";
import { getSurveys } from "../src/queries/getSurveys";
import { getOperations } from "../src/queries/getOperations";
import { surveysAtom, currentSurveyAtom } from "../src/store/surveys";
import { operationsAtom, conditionGroupsAtom } from "../src/store/yieldManager";
import SurveySelector from "../src/features/SurveySelector";

const Home: NextPage = () => {
  const [surveys, setSurveyAtom] = useAtom(surveysAtom);
  const [currentSurvey, setCurrentSurvey] = useAtom(currentSurveyAtom);
  const [operations, setOperations] = useAtom(operationsAtom);
  const [conditionGroups, setConditionGroups] = useAtom(conditionGroupsAtom);

  async function fetchSurveys() {
    const data = await getSurveys();
    setSurveyAtom(data);
  }

  async function fetchOperations() {
    const data = await getOperations();
    setOperations(data);
  }

  useEffect(() => {
    fetchSurveys();
    fetchOperations();
  }, []);

  return (
    <Flex flexFlow="column">
      <SurveySelector />
      {conditionGroups?.map((conditionGroup, i) => {
        return <ConditionGroup key={i} conditionGroup={conditionGroup} />;
      })}
    </Flex>
  );
};

export default Home;
