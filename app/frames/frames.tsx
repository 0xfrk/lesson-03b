import { farcasterHubContext } from "frames.js/middleware";
import { createFrames } from "frames.js/next";

export const frames = createFrames({
  basePath: "/frames",
  debug: process.env.NODE_ENV === "development",
  middleware: [
    farcasterHubContext({
      ...(process.env.NODE_ENV === "production"
        ? {
            hubHttpUrl: "https://hubs.airstack.xyz",
            hubRequestOptions: {
              headers: {
                "x-airstack-hubs": process.env.AIRSTACK_API_KEY as string,
              },
            },
          }
        : {
            hubHttpUrl: "http://localhost:3010/hub",
          }),
    }),
  ],
});
