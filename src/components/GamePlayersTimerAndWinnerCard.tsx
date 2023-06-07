const GamePlayersTimerAndWinnerCard = () => {
  return (
    <>
      {false ? (
        <div
          className={`${"bg-MediumYellow"} absolute  rounded-t-[50px] flex justify-center items-center pt-[10px] flex-col left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 top-[640px]  sm:top-[900px] littleMore  xl:top-[750px]  w-[191px] h-[150px] shadow-main border-DarkBlack border-[3px] border-solid`}
        >
          <p className="font-bold text-[16px] leading-[20.68px]">
            PLAYER 2'S TURN
          </p>
          <h1 className="font-bold text-[56px] leading-[71.68px]">14s</h1>
        </div>
      ) : (
        <div className="bg-PureWhite  absolute  rounded-[20px] flex justify-center items-center pt-[10px] flex-col left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 top-[640px]  sm:top-[900px] littleMore  xl:top-[750px]  w-[285px] h-[160px] shadow-main border-DarkBlack border-[3px] border-solid">
          <p className="font-bold text-[16px] leading-[20.68px]">PLAYER2</p>
          <h1 className="font-bold text-[56px] leading-[71.68px]">WINS</h1>
          <div className="cursor-pointer w-[130px] rounded-[25px] h-[40px] flex justify-center  items-center bg-DarkPurple">
            <p className="font-bold text-[16px] leading-[20.68px]  text-PureWhite">
              PLAYER2
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default GamePlayersTimerAndWinnerCard;
