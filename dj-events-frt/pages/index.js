import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

export default function HomePage({events}) {
  //console.log(events); //display les data ds le browser (client)
  return (
    <Layout>
      <h1>Upcoming Events</h1>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  //console.log(events); // display les data ds le terminal (server)

  return {
    props: {events},
    revalidate: 1
  };
}
