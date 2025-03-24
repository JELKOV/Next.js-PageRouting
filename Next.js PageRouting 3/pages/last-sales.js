import { useEffect, useState } from "react";
import useSWR from "swr";

// fetcher 함수 정의
const fetcher = (url) => fetch(url).then((res) => res.json());

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);
  //   const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR(
    "https://nextjspr-course-default-rtdb.firebaseio.com/sales.json",
    fetcher
  );

  useEffect(() => {
    if (data) {
      const transformed = [];
      for (const key in data) {
        transformed.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformed);
    }
  }, [data]);

  //   useEffect(() => {
  //     setIsLoading(true);

  //     fetch("https://nextjspr-course-default-rtdb.firebaseio.com/sales.json")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const transformedSales = [];
  //         for (const key in data) {
  //           transformedSales.push({
  //             id: key,
  //             username: data[key].username,
  //             volume: data[key].volume,
  //           });
  //         }
  //         setSales(transformedSales);
  //         setIsLoading(false);
  //       });
  //   }, []);

  if (error) return <p>Failed to load.</p>;
  if (!data && !sales) return <p>Loading...</p>;

  //   // Firebase 데이터는 객체 형태 → 배열로 변환
  //   const transformedSales = [];
  //   for (const key in data) {
  //     transformedSales.push({
  //       id: key,
  //       username: data[key].username,
  //       volume: data[key].volume,
  //     });
  //   }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://nextjspr-course-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await response.json();

  const transformedSales = [];
  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }
  return {
    props: {
      sales: transformedSales,
    }
  };
}

export default LastSalesPage;
