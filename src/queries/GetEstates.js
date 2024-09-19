import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const GetEstates = () => {
  const token = "9d0860cc-efc9-4d7b-bb3c-4b0c3954d631";

  return useQuery({
    queryKey: ["real-estates"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://api.real-estate-manager.redberryinternship.ge/api/real-estates",
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
