import { useEffect, useState } from 'react';

export const Sum = props => {
  const [number, setnumber] = useState({ a: 0, b: 0 });

  useEffect(() => {
    if (props) {
      setnumber({
        a: props.a || 0,
        b: props.b || 0,
      });
    }
  }, []);

  return (
    <>
      <p>
        Sum of {number.a} and {number.b} is {number.a + number.b}
      </p>
    </>
  );
};
