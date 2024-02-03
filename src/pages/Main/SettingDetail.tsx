import { IconChevronLeft } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import BlockAccounts from "../../components/Settings/BlockAccounts";
import Notifications from "../../components/Settings/Notifications";
import PaymentInformation from "../../components/Settings/PaymentInformation";
import PersonalDataPolicy from "../../components/Settings/PersonalDataPolicy";
import Profile from "../../components/Settings/Profile";
import RefundAndCancellation from "../../components/Settings/RefundAndCancellation";
import TermsOfMoneyTransfer from "../../components/Settings/TermsOfMoneyTransfer";
import TermsOfService from "../../components/Settings/TermsOfService";
import SearchField from "../../util/SearchField";

const SettingDetail = () => {
  const [searchText, setSearchText] = useState("");
  const { settingType } = useParams();
  const title = settingType?.split("-").join(" ");
  const firstLetter = title?.charAt(0).toUpperCase();
  const [isProfileEdit, setIsProfileEdit] = useState(true);
  const [isPaymentEdit, setIsPaymentEdit] = useState(false);

  return (
    <div>
      {/* {isProfileEdit ? (
        <button
          onClick={() => setIsProfileEdit(false)}
          className="flex items-center  gap-1 text-md "
        >
          {" "}
          <IconChevronLeft /> <span>Edit Profile</span>
        </button>
      ) : isPaymentEdit ? (
        <button
          onClick={() => setIsPaymentEdit(false)}
          className="flex items-center  gap-1 text-md "
        >
          {" "}
          <IconChevronLeft /> <span>Edit Payment Information</span>
        </button>
      ) : (
        <Link to="/settings" className="flex items-center  gap-1 text-md ">
          {" "}
          <IconChevronLeft /> <span>{firstLetter + "" + title?.slice(1)}</span>
        </Link>
      )} */}

      {/* //blocked accounts search bar*/}
      {settingType === "block-accounts" && (
        <div className="mt-4">
          <SearchField
            placeholder="Search by name/email/phone number"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      )}

      <div >
        {settingType === "notifications" && <Notifications />}
        {settingType === "profile" && (
          <Profile
            isProfileEdit={isProfileEdit}
            setIsProfileEdit={setIsProfileEdit}
          />
        )}
        {settingType === "block-accounts" && (
          <BlockAccounts searchText={searchText} />
        )}
        {settingType === "payment-information" && (
          <PaymentInformation
            isPaymentEdit={isPaymentEdit}
            setIsPaymentEdit={setIsPaymentEdit}
          />
        )}
        {settingType === "terms-of-money-transfer" && <TermsOfMoneyTransfer />}
        {settingType === "personal-data-policy" && <PersonalDataPolicy />}
        {settingType === "term-of-service" && <TermsOfService />}
        {settingType === "refund-and-cancellation-policy" && (
          <RefundAndCancellation />
        )}
      </div>
    </div>
  );
};

export default SettingDetail;
