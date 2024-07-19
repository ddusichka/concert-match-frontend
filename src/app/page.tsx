"use client";
import React, { useEffect, useState } from "react";
import ConcertCard from "@/components/ConcertCard";

function fetchDataFromLocalService() {
  // Replace '/api/data' with your actual endpoint
  const endpoint = "http://localhost:8000/matches/";

  return fetch(endpoint)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .catch((error) =>
      console.error("There was a problem with your fetch operation:", error)
    );
}

export default function MyComponent() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchDataFromLocalService().then((apiData) => {
      setData(apiData);
      console.log(apiData[0]);
    });
  }, []);

  return (
    <div>
      {data.map((match) => (
        <ConcertCard key={match.id} match={match} />
      ))}
    </div>
  );
}
