import React from "react";
import styles from "../../styles/ninjas.module.css"
import Link from "next/link";

async function fetchNinjas() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const ninjas = await res.json();

  return ninjas;
}


const NinjasList = async () => {
  const ninjas = await fetchNinjas();

  return (
      //   <Head>
  //   <title>Ninja List | About</title>
  //   <meta name="keywords" content="ninjas" />
  // </Head>
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link href={`/ninjasList/${ninja.id}`} key={ninja.id}>
          <div className={styles.single}>
            <h1>{ninja.name}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default NinjasList;
