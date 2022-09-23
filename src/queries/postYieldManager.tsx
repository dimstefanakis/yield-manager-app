import axios from "axios";

export async function postYieldManager(surveyId: string, data: any) {
  const response = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/yield_manager/add_new_filter_to_survey/${surveyId}/`,
    data
  );
  return response.data;
}
