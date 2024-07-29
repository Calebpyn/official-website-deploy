//Icons
import { BsWhatsapp } from "react-icons/bs";

function ContactButton() {

  //Contact link
  const contactUrl = 'https://wa.me/526461839897'

  return (
    <div className="fixed z-[300] bottom-0 max-w-screen-2xl w-full flex justify-end items-end">
      <div className="mr-6 mb-6 h-[60px] w-[60px] bg-[#5AC617] rounded-full shadow-lg flex justify-center items-center cursor-pointer tr hover:scale-110" onClick={() => window.open(contactUrl, '_blank')}>
        <BsWhatsapp className="text-3xl text-white" />
      </div>
    </div>
  );
}

export default ContactButton;
