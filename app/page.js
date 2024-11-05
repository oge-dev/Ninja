import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <NavBar/>
      <h1>Homepage</h1>
      <p>
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
      <p>
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
      <p>
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
      <Link href="/ninjasList">See Ninja Listing</Link>
      <Footer/>
    </div>
  );
}
