import React from "react";
import { notFound } from 'next/navigation';

async function fetchNinjasDetail(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    notFound(); // If user not found, show 404 page
  }
  const ninjasDetail = await res.json();
  return ninjasDetail;
}

const Details = async ({ params }) => {
  const { details } = await params;
  const ninjasDetail = await fetchNinjasDetail(details);

  console.log(ninjasDetail);

  return (
    <div>
      <div key={ninjasDetail.id}>
        <h1>{ninjasDetail.name}</h1>
        <p><strong>Email:&nbsp;</strong><span>{ninjasDetail.email}</span></p>
        <p><strong>Website:&nbsp;</strong><span>{ninjasDetail.website}</span></p>
        <p><strong>City:&nbsp;</strong><span>{ninjasDetail.address.city}</span></p>
      </div>
    </div>
  );
};

export default Details;
