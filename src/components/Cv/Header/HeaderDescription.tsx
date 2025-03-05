import React, { FC } from "react";
import { useLocalFormatHook } from "../../../common/hooks/localFormatHook";

type HeaderDescriptionType = {
  text: string;
  className: string;
};

const HeaderDescription: FC<HeaderDescriptionType> = (props) => {
  const { text, className } = props;
  const { formatText } = useLocalFormatHook();

  return <p className={className}>{formatText(text)}</p>;
};

export default HeaderDescription;
