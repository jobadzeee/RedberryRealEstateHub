import { Dialog } from "@headlessui/react";

const Modal = ({
  isOpen,
  closeModal,
  children,
  className,
  variant,
  type = "default",
}) => {
  const styles = {
    blur: "bg-[#02152657] backdrop-blur-md fixed inset-0 flex w-screen items-center justify-center p-4",
    normal:
      "bg-transparent  fixed inset-0 flex w-screen items-center justify-center p-4",
  };
  console.log(isOpen);

  return (
    <>
      {type === "default" && (
        <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
          <div className={styles[variant]}>
            <Dialog.Panel className={className}>{children}</Dialog.Panel>
          </div>
        </Dialog>
      )}
      {type === "region" && (
        <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
          <div className={styles[variant]}>
            <Dialog.Panel className={className}>{children}</Dialog.Panel>
          </div>
        </Dialog>
      )}
    </>
  );
};

export default Modal;
