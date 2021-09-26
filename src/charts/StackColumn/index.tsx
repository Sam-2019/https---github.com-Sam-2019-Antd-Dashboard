import { useQuery } from "@apollo/client";
import Spinner from "../../components/Spinner/Spinner";
import Error from "../../components/Error/Error";

import StackColumn from "./StackColumn";

const StackChart = ({ info, type }: any) => {
  const { loading, error, data } = useQuery(info, {
    variables: { groupStatType: type },
  });

  console.log(data);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Error />;
  }

  return <StackColumn data={data.groupStat} />;
};

export default StackChart;