//Description: Reviews section

//Components
import BasicReview from "../common/BasicReview";
import HReview from "../common/HReview";

function Section4() {
  return (
    <div className="bg-white">
      <div className="flex justify-center items-center py-10 bottom-shadow">
        <div><HReview content="review_4" reviewer="CAROL LAUMEN" width="800"/></div>
      </div>

      <div className="flex justify-center items-start py-10 gap-2">
        <div>
          <BasicReview content="review_1" reviewer="FRED HAGAN" width="400" />
        </div>

        <div>
          <BasicReview content="review_2" reviewer="JOHN WOREK" width="400" />
        </div>
        <div>
          <BasicReview content="review_3" reviewer="BILL & CAROLYN NEVINS" width="400" />
        </div>
      </div>
    </div>
  );
}

export default Section4;
