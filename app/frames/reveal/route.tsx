import { Button } from "frames.js/next";
import { frames } from "app/frames/frames";
import { appURL } from "app/utils";

const handleRequest = frames(async (ctx) => {
  // コンテキストをコンソールログに出力
  console.log("Context: %o", ctx);

  // 変数 profileImageUrl の値として profileImage が取得できた場合は profileImage の値を、取得できなかった場合は unavailable.png を代入
  const profileImageUrl = ctx.message?.requesterUserData?.profileImage || `${appURL()}/unavailable.png??`;

  // フレームデータを返す
  return {
    image: (
      <div
        tw="flex w-full h-full pt-40 justify-center items-center"
        style={{
          backgroundImage: `url(${appURL()}/bird.png)`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <img tw="rounded-full" src={profileImageUrl} width="600" height="600" alt="" />
      </div>
    ),
    imageOptions: {
      aspectRatio: "1:1",
    },
    buttons: [
      <Button action="post" target="/">
        Reset
      </Button>,
    ],
  };
});

export const GET = handleRequest;
export const POST = handleRequest;
