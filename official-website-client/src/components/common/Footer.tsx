//Description: Footer common component img should be passed as a prop

//Types
import { footerType } from "../../types/common/FooterTypes"

//Translation
import { useTranslation } from "react-i18next"

//Icons
import { FaRegCopyright } from "react-icons/fa";

const Footer: React.FC<footerType> = ({img}) => {

    //Translation
    const {t} = useTranslation()

  return (
    <div className='h-[500px] w-full flex flex-col justify-between items-center'>
        <div className="w-full h-[400px] bg-cover bg-center" style={{backgroundImage: `url('${img}')`}}>

        </div>

        <div className="h-[100px] bg-[#072C4F] flex justify-end items-center w-full pr-28 gap-3 text-white text-xs">
            <span>"{t('all_rights')}"</span>
            <div className="h-[5px] w-[5px] bg-[#E6A146]"></div>
            <span className="flex items-center"><FaRegCopyright className="md:mr-2 text-[#E6A146]"/>2023</span>
        </div>
    </div>
  )
}

export default Footer