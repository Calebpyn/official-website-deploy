//Description: Homeowners info

//Assets
import infoImg from "../../assets/property_m/bg-asset-1.png"

//Translation
import { useTranslation } from "react-i18next"

function Section1() {
//Translation
    const {t} = useTranslation()
  return (
    <div className="w-full flex justify-center items-center bg-white p-10">
        <div className="flex justify-center items-center gap-10 flex-col md:flex-row">
            <div className="flex flex-col gap-5 md:w-[50%] w-[90%]">
                <span className="text-4xl">
                    {t('for_homeowners')}
                </span>
                <div className="bg-[#CC9955] w-[60px] h-[5px]"></div>

                <span className="flex flex-col gap-4 text-lg">
                    <p>{t('text_segment_pm_s1_1')}</p>
                    <p>{t('text_segment_pm_s1_2')}</p>
                </span>
            </div>

            <div>
                <img src={infoImg} className="w-[450px] h-auto"/>
            </div>
        </div>
    </div>
  )
}

export default Section1