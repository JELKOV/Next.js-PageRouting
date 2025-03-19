import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  function loadProjectHandler() {
    router.push({
      pathname: "/clients/[id]/[clientprojectid]", // 동적 경로 설정
      query: { id: "max", clientprojectid: "projecta" }, // 동적 값 전달
    });
  }

  console.log(router.query);
  return (
    <div>
      <h1>The Proejcts of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientProjectsPage;
