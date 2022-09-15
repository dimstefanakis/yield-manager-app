import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Flex } from "@chakra-ui/react";
import { useAtom } from "jotai";
import styles from "../styles/Home.module.css";
import { getSurveys } from "../src/queries/getSurveys";
import { surveysAtom } from "../src/store/survey";

const Home: NextPage = () => {
  const [surveys, setSurveyAtom] = useAtom(surveysAtom);

  async function fetchSurveys() {
    const data = await getSurveys();
    setSurveyAtom(data);
  }
  useEffect(() => {
    fetchSurveys();
  }, []);

  return <Flex></Flex>;
};

export default Home;
