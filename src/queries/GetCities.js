import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const GetCities = () => {
  const token = "9d0860cc-efc9-4d7b-bb3c-4b0c3954d631";

  return useQuery({
    queryKey: ["cities"],
    queryFn: async () => {
      const response = await axios.get(
        "https://api.real-estate-manager.redberryinternship.ge/api/cities",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return response.data;
    },
  });
};
