import { Fragment } from "react";
import path from "path";
import fs from "fs/promises";

function ProductDetailPage(props) {
  const { loadedProduct } = props;
  if (!loadedProduct) {
    return <p>Loading...</p>;
  }
  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

async function getData() {
  // 1. 절대 경로 만들기
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  // 2. 파일 읽기 (비동기 방식)
  const jsonData = await fs.readFile(filePath, "utf-8");
  // 3. JSON 파싱
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;

  const data = await getData();

  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return { notFound: true };
  }
  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((product) => product.id);

  const pathsWithParmas = ids.map((id) => ({
    params: { pid: id },
  }));

  return {
    paths: pathsWithParmas,
    fallback: true, // 또는 true, 'blocking' 필요에 따라 선택
  };
}

export default ProductDetailPage;
