import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const PostAgent = () => {
  const token = "9d0860cc-efc9-4d7b-bb3c-4b0c3954d631";

  return useMutation({
    mutationKey: ["agent"],
    mutationFn: async (estateData) => {
      const { data } = await axios.post(
        "https://api.real-estate-manager.redberryinternship.ge/api/agents",
        estateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data;
    },
  });
};
