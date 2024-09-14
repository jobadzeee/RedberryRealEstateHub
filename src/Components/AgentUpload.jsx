import { Dialog, DialogPanel } from "@headlessui/react";
import Form from "./Form";
import Label from "./Label";
import Input from "./Input";
import TextArea from "./TextArea";
import { ReactComponent as Done } from "../assets/images/done.svg";
import Button from "./Button";

const AgentUpload = ({ isOpen, closeModal }) => {
  return (
    <>
      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        <div className="bg-[#02152657] backdrop-blur-md fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="w-[1009px] rounded-[10px] bg-white px-[105px] py-[87px]">
            <h2 className="text-[32px] text-center font-bold">
              აგენტის დამატება
            </h2>
            <Form className="space-y-7 flex flex-col pt-16 py-24 ">
              <div className="flex gap-5">
                <div className="space-y-[5px] flex flex-col">
                  <Label htmlFor="name" variant="semibold" text="სახელი *" />
                  <Input type="text" id="name" />
                  <Label htmlFor="name" variant="basic">
                    <Done /> მინიმუმ ორი სიმბოლო
                  </Label>
                </div>
                <div className="space-y-[5px] flex flex-col">
                  <Label htmlFor="surname" variant="semibold" text="გვარი" />
                  <Input type="text" id="surname" />
                  <Label htmlFor="surname" variant="basic">
                    <Done /> მინიმუმ ორი სიმბოლო
                  </Label>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="space-y-[5px] flex flex-col">
                  <Label htmlFor="email" variant="semibold" text="ელ-ფოსტა *" />
                  <Input type="email" id="name" />
                  <Label htmlFor="email" variant="basic">
                    <Done /> გამოიყენეთ @redberry.ge ფოსტა
                  </Label>
                </div>
                <div className="space-y-[5px] flex flex-col">
                  <Label
                    htmlFor="number"
                    variant="semibold"
                    text="ტელეფონის ნომერი"
                  />
                  <Input type="number" id="number" />
                  <Label htmlFor="number" variant="basic">
                    <Done /> მხოლოდ რიცხვები
                  </Label>
                </div>
              </div>
              <div className="space-y-[5px]">
                <Label text="ატვირთეთ ფოტო" variant="semibold" />
                <TextArea />
              </div>
            </Form>

            <div className="space-x-4 w-full flex justify-end">
              <Button variant="outline" onClick={closeModal} text="გაუქმება" />
              <Button variant="primary" text="დაამატე ლისტინგი" />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};

export default AgentUpload;
