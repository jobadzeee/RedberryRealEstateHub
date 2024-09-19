import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const DeleteDetails = () => {
  const token = "9d0860cc-efc9-4d7b-bb3c-4b0c3954d631";

  return useMutation({
    mutationFn: async (id) => {
      if (!id) throw new Error("ID is required");

      const { data } = await axios.delete(
        `https://api.real-estate-manager.redberryinternship.ge/api/real-estates/${id}`,
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
