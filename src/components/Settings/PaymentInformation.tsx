import {
  IconBuildingBank,
  IconEdit,
  IconPhone,
  IconUser,
} from "@tabler/icons-react";
import InputField from "../../util/InputField";

interface IPayment {
  isPaymentEdit: boolean;
  setIsPaymentEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const PaymentInformation: React.FC<IPayment> = ({
  isPaymentEdit,
  setIsPaymentEdit,
}) => {
  const items = [
    { title: "Bank", value: "AB Bank" },
    { title: "Phone Number", value: "1589465655" },
    { title: "Name", value: "Fahim" },
  ];
  return (
    <div>
      {!isPaymentEdit && (
        <button
          onClick={() => setIsPaymentEdit(true)}
          className="bg-primary text-white py-2 px-2 rounded-md flex items-center gap-2 mx-auto hover:bg-[#956ada] duration-100"
        >
          <IconEdit />
          Edit Payment Information
        </button>
      )}

      {!isPaymentEdit && (
        <div className="mt-5">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between space-y-3"
            >
              <p>{item.title}</p>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      )}

      {isPaymentEdit && (
        <form className="w-full mt-5">
          <InputField
            placeholder="Bank"
            iconType={<IconBuildingBank color="#333333" size={20} />}
          />
          <InputField
            placeholder="Phone number"
            iconType={<IconPhone color="#333333" size={20} />}
          />
          <InputField
            placeholder="Name"
            iconType={<IconUser color="#333333" size={20} />}
          />

          <button
            type="submit"
            className="bg-[#b278fb]
         text-white mt-8 py-3 rounded-full w-full hover:bg-white hover:outline hover:text-[#b278fb] duration-200"
          >
            Update
          </button>
        </form>
      )}
    </div>
  );
};

export default PaymentInformation;
