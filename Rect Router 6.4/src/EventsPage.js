import React from "react";
import { useLoaderData, useNavigation, Link } from "react-router-dom";

function EventsPage() {
  const data = useLoaderData();
  const navigation = useNavigation();
  console.log(344);
  if (data.isError) {
    return <p>{data.message}</p>;
  }
  return (
    <div>
      EventsPage
      {data.products.map((el) => (
        <p key={el.id}>
          <Link to={`${el.id}`}>{el.title}</Link>
        </p>
      ))}
      {navigation.state === "idle" && <p>idle</p>}
      {navigation.state === "loading" && <p>loading</p>}
      {navigation.state === "submitting" && <p>submitting</p>}
    </div>
  );
}

export default EventsPage;
