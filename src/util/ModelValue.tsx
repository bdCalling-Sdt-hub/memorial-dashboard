import HeadingText from "./HeadingText";
import photo from "../assets/Rectangle 14.jpg"

const ModelValue = ({
  title = "",
  keys,
  values,
}: {
  title?: string;
  keys: string[];
  values: (string | number)[];
}) => {
  return (
    <div className="mb-3">
      <HeadingText color="#0071E3">{title}</HeadingText>
      <img src={photo} className="mt-4" width={96} height={69} alt="" />
      <div className="flex items-center justify-between mt-3">
        <div className="space-y-1 text-[18px] font-normal text-[#555555]">
          {keys.map((key, index) => (
            <p key={index}>{key}</p>
          ))}
        </div>
        <div className="text-end space-y-1 text-[18px] font-normal text-[#555555]">
          {values.map((key, index) => (
            <p key={index}>{key}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModelValue;
