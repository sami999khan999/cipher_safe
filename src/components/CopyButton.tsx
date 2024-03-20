import { useState } from "react";
import { FaCheck, FaCopy } from "react-icons/fa";

type CopyButtonProps = {
  content: string;
  index: number;
};

const CopyButton = ({ content, index }: CopyButtonProps) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (content: string, index: number) => {
    navigator.clipboard.writeText(content);
    setCopiedIndex(index);
  };

  return (
    <button
      onClick={() => copyToClipboard(content, index)}
      className="ml-3 px-1 py-1 bg-green-700 text-white rounded-md"
    >
      {copiedIndex === index ? <FaCheck /> : <FaCopy />}
    </button>
  );
};

export default CopyButton;
