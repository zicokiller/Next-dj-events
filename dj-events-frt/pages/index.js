import Layout from "@/components/Layout";
import EventItem from "@/components/EventItem";
import Link from "next/link";
import { API_URL } from "@/config/index";

export default function HomePage({events}) {
  //console.log(events); //display les data ds le browser (client)
  return (
    <Layout>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map(evt => (
        <EventItem key={evt.id} evt={evt} />
      ))}
      {events.length > 0 &&(
        <Link href="/events">
          <a className="btn-secondary">View All Events</a>
        </Link>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);
  const events = await res.json();

  //console.log(events); // display les data ds le terminal (server)

  return {
    props: {events: events.slice(0,3)},
    revalidate: 1
  };
}
