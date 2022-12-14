import axios from "axios";

export async function getDataFieldsBySurvey(surveyId: string) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/yield_manager/get_data_fields_by_survey/${surveyId}/`
  );
  return response.data;
}
