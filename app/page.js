"use client"
import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link";
import RecipeCard from "./components/RecipeCard";
import { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore'
import { db } from "firebase"

export default function Home() {
  const [recipeList, setRecipeList] = useState([])

  useEffect(() => {
    const getRecipesList = async () => {
      const recipesCollection = collection(db, "recipes")

    }

  }, [])

  return (
    <main className="my-3 container">
      <div className="d-flex justify-content-between">
        <h4>Recipes List</h4>
        <Link href={"/recipes/create"} className="btn btn-primary">Add New Recipe</Link>
      </div>
      <div className="d-flex flex-wrap">
        <RecipeCard></RecipeCard>
      </div>
    </main>
  );
}
