import React from "react";
import Count from "../../Components/Count";
import { useHistory } from "react-router-dom";

export default function CountPage({}) {
  const history = useHistory();

  const handleNavigate = () => history.push("/detail");
  return (
    <Count handleNavigate={handleNavigate} />
  );
}

