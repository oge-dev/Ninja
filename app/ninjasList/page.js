"use client"; // Add this directive at the top of the file

import React, { useEffect, useState } from "react";
import styles from "../../styles/ninjas.module.css"


function NinjasList() {
  const [ninjas, setNinjas] = useState(null);

  useEffect(() => {
    async function fetchNinjas() {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await res.json();
      setNinjas(data);
    }
    fetchNinjas();
  }, []);

  if (!ninjas) return <div>Loading...</div>;

  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <div key={ninja.id}>
          <a className={styles.single}>
            <h1>{ninja.name}</h1>
          </a>
        </div>
      ))}
    </div>
  );
}

export default NinjasList;
