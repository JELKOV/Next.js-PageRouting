import path from "path";
import fs from "fs/promises";

import Link from "next/link";

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  console.log("(Re-)Generating...");
  // 1. 절대 경로 만들기
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");

  // 2. 파일 읽기 (비동기 방식)
  const jsonData = await fs.readFile(filePath, "utf-8");

  // 3. JSON 파싱
  const data = JSON.parse(jsonData);

  // 4. props로 반환
  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products, // 예: { products: [ ... ] }
    },
    revalidate: 10,
  };
}

export default HomePage;
