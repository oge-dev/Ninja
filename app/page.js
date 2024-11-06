import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod saepe
        officiis, ad impedit blanditiis ea molestiae reiciendis alias fugit
        consequatur assumenda accusantium eveniet explicabo, nobis dignissimos
        vel quaerat architecto et!Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quod saepe officiis, ad impedit blanditiis ea
        molestiae reiciendis alias fugit consequatur assumenda accusantium
        eveniet explicabo, nobis dignissimos vel quaerat architecto et!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quod saepe officiis,
        ad impedit blanditiis ea molestiae reiciendis alias fugit consequatur
        assumenda accusantium eveniet explicabo, nobis dignissimos vel quaerat
        architecto et!
      </p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod saepe
        officiis, ad impedit blanditiis ea molestiae reiciendis alias fugit
        consequatur assumenda accusantium eveniet explicabo, nobis dignissimos
        vel quaerat architecto et!Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quod saepe officiis, ad impedit blanditiis ea
        molestiae reiciendis alias fugit consequatur assumenda accusantium
        eveniet explicabo, nobis dignissimos vel quaerat architecto et!Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Quod saepe officiis,
        ad impedit blanditiis ea molestiae reiciendis alias fugit consequatur
        assumenda accusantium eveniet explicabo, nobis dignissimos vel quaerat
        architecto et!
      </p>
      <Link className={styles.btn} href="/ninjasList">See Ninja Listing</Link>
    </div>
  );
}
