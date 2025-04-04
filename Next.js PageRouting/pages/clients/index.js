import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "menu", name: "Manuel" },
  ];
  return (
    <div>
      <h1>The ClientsPage</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={{
              pathname: '/clients/[id]',
              query: {id: client.id},
            }}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ClientsPage;
