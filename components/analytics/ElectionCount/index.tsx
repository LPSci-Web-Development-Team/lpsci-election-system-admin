// ANCHOR React
import * as React from 'react';

// ANCHOR Utils
import { GET } from '@lpsci/utils/axios/methods';

interface IProps {
  id: string;
}

export const ElectionCount = React.memo(({ id }: IProps) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    GET(`/api/candidates/${id}/voters/count`)
      .then((response: any) => (
        setCount(response.data.count)
      ));
  }, [id]);

  return (
    <>{ count }</>
  );
});
