import axios from "axios";

export async function getSurveys() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/surveys/`
  );
  return response.data;
}
