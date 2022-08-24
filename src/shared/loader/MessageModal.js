import Portal from "../Portal";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Gif from "../Gif";
import image from "../../app/assets/gif/success.json";

export default function MessageModal(props) {
  return (
    <>
      {props.open && (
        <Portal selector="#modal">
          <div
            onClick={() => props.setOpen()}
            className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-slate-800 bg-opacity-90 overflow-hidden"
          >
            <div
              style={{ top: "25%", bottom: "25%", left: "34%", right: "34%" }}
              className="bg-white bg-opacity-100 absolute rounded-md"
            >
              <div className="flex justify-between items-center border-b px-4 py-4 border-slate-300">
                <p className="text-sm font-semibold text-gray-600">
                  Notification
                </p>
                <AiOutlineCloseCircle
                  onClick={() => props.setOpen()}
                  className=" text-indigo-500 text-2xl hover:text-red-500 cursor-pointer"
                />
              </div>
              <div className="w-32 mx-auto py-2">
                <Gif image={image} />
              </div>
              <h3 className="text-center text-base text-gray-600 font-semibold">
                {props.message}
              </h3>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
