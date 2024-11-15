import { Button } from "frames.js/next";
import { frames } from "app/frames/frames";
import { appURL } from "app/utils";

const handleRequest = frames(async (ctx) => {
  // コンテキストをコンソールログに出力
  console.log("Context: %o", ctx);

  // コンテキストから profileImage のURLを取得
  const profileImageUrl: string | undefined = ctx.message?.requesterUserData?.profileImage;

  // プロフィール画像が取得できた場合に呼び出すコンポーネント
  const ImageAvailable = () => {
    return (
      <div
        tw="flex w-full h-full pt-40 justify-center items-center"
        style={{
          backgroundImage: `url(${appURL()}/bird.png)`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <img tw="rounded-full" src={profileImageUrl} width="600" height="600" alt="" />
      </div>
    );
  };

  // プロフィール画像が取得できなかった場合に呼び出すコンポーネント
  const ImageUnavailable = () => {
    return <img src={`${appURL()}/unavailable.png`} width="1146" height="1146" alt="" />;
  };

  // フレームデータを返す
  return {
    image: profileImageUrl ? <ImageAvailable /> : <ImageUnavailable />,
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
