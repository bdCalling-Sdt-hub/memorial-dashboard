import HeadingText from "./HeadingText";

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
      <HeadingText>{title}</HeadingText>
      <div className="flex items-center justify-between mt-3">
        <div className="space-y-1">
          {keys.map((key, index) => (
            <p key={index}>{key}</p>
          ))}
        </div>
        <div className="text-end space-y-1">
          {values.map((key, index) => (
            <p key={index}>{key}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModelValue;
