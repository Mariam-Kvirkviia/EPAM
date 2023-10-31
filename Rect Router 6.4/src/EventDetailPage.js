import React from "react";
import { useParams } from "react-router-dom";
function EventDetailPage() {
  const { id } = useParams();
  console.log(id);
  return <div>{id}</div>;
}

export default EventDetailPage;
