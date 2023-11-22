import { deleteEvent, queryClient } from "../../util/http";
import { useMutation } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router";

const Toast = () => {
  const eventId = useParams().eventId;
  const navigate = useNavigate();

  const { mutate } = useMutation({
    mutationFn: deleteEvent,
    onError: (error) => {
      console.error("Error editing event:", error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["events", eventId]);
      navigate("/events");
    },
  });

  return (
    <div class="max-w-md border rounded-lg">
      <div class="flex flex-col p-5 rounded-lg shadow bg-white">
        <div class="flex">
          <div>
            <svg
              class="w-6 h-6 fill-current text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>

          <div class="ml-3">
            <h2 class="font-semibold text-gray-800">Alert Component</h2>
            <p class="mt-2 text-sm text-gray-600 leading-relaxed">
              Etiam finibus velit vel lacus cursus porttitor ac rhoncus leo. Ut
              gravida justo est, sit amet vulputate felis vestibulum eleifend.
              Vivamus faucibus augue a scelerisque rutrum. Donec faucibus nibh
              ex, in condimentum quam viverra in.
            </p>
          </div>
        </div>

        <div class="flex justify-end items-center mt-3">
          <button class="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md">
            Cancel
          </button>

          <button class="px-4 py-2 ml-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-md">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
