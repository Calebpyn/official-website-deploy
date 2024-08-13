//Description: For sale review section

import BasicReview from "../common/BasicReview";

function Section2() {
  return (
    <div className="w-full flex flex-col items-center bg-white pb-14">
      <div className="w-full bg-zinc-200 h-[1px] my-5"></div>
      <div className="w-full flex justify-around items-start flex-wrap gap-4 md:gap-2">
        <BasicReview
          content="review_fs_s2_1"
          reviewer="MARIA DE LOS ANGELES TORRES-ALMODOVAR"
          width="600"
        />
        <BasicReview
          content="review_fs_s2_2"
          reviewer="NOELLE RENE FLAHERTY"
          width="600"
        />
      </div>
    </div>
  );
}

export default Section2;
