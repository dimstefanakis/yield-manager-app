import { useEffect } from "react";
import { Select, Flex, Heading, Text } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { surveysAtom, currentSurveyAtom } from "../../store/surveys";
import { yieldManagerAtom } from "../../store/yieldManager";
import { getYieldManagerBySurvey } from "../../queries/getYieldManagerBySurvey";

function SurveySelector() {
  const [surveys, setSurvey] = useAtom(surveysAtom);
  const [currentSurvey, setCurrentSurvey] = useAtom(currentSurveyAtom);
  const [yieldManager, setYieldManager] = useAtom(yieldManagerAtom);

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedSurvey = surveys.find(
      (survey) => survey.id == e.target.value
    );

    setCurrentSurvey(selectedSurvey);
  }

  async function fetchYieldManagerBySurvey() {
    if (currentSurvey) {
      let data = await getYieldManagerBySurvey(currentSurvey.id);
      setYieldManager(data);
    }
  }
  useEffect(() => {
    fetchYieldManagerBySurvey();
  }, [currentSurvey]);

  useEffect(() => {
    if (surveys.length > 0) {
      setCurrentSurvey(surveys[0]);
    }
  }, [surveys]);

  return (
    <Flex flexFlow="column" m={10} mb={0}>
      <Select size="lg" onChange={onChange}>
        {surveys.map((survey) => (
          <option key={survey.id} value={survey.id}>
            {survey.name}
          </option>
        ))}
      </Select>
    </Flex>
  );
}

export default SurveySelector;
