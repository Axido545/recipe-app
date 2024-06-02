import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link";

export default function Home() {
  return (
    <main className="my-3">
      <div className="d-flex justify-content-between container">
        <h4>Recipes List</h4>
        <Link href={"/recipes/create"} className="btn btn-primary">Add New Recipe</Link>
      </div>
    </main>
  );
}
