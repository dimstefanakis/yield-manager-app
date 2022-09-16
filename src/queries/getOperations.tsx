import axios from "axios";

export async function getOperations() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/v1/yield_manager/operations/`
  );
  return response.data;
}
