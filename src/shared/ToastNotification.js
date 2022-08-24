import Portal from "../shared/Portal";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function ToastNotification(props) {
  return (
    <>
      {props.open && (
        <Portal selector="#modal">
          <div
            onClick={() => props.setOpen()}
            className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-slate-800 bg-opacity-60 overflow-hidden"
          >
            <div
              style={{ top: "14%", left: "34%", right: "34%" }}
              className="bg-gradient-to-r from-red-600 via-yellow-600 to-orange-600 absolute rounded-md "
            >
              <div className="flex justify-between items-center  px-4 py-4">
                <p className="text-sm font-semibold text-gray-200">
                  {props.message}
                </p>
                <AiOutlineCloseCircle
                  onClick={() => props.setOpen()}
                  className=" text-gray-200 text-2xl cursor-pointer"
                />
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}
