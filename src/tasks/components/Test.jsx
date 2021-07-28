import React, { useEffect, useState } from 'react';
import qs from 'qs';
import assert from 'assert';

const Test = () => {
  const [data, setData] = useState(null);
  const baseUrl = 'https://api.iev.aero/api/flights/28-07-2021';


  useEffect(() => {
    fetch(baseUrl).then(response => response.json()).then(data => setData(data.body.departure));
  }, [])

  console.log(data);
  const obj = qs.parse('a=c&b=3');
  assert.deepStrictEqual(obj, {a: "c", b: "3"});
  const obj1 = {
    body: {
      departure:[{
        codeShareData: [{
          codeShare: '7B2001',
        }]
      }]
    }
  }

  const str = qs.stringify(obj1);
  console.log(str);
  return <h1>Hello</h1>
}

export default Test;