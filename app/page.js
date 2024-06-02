"use client"
import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link";
import RecipeCard from "./components/RecipeCard";
import { useEffect, useState } from "react";
import { collection, getDocs } from 'firebase/firestore'
import { db } from "../firebase"

export default function Home() {
  const [recipesList, setRecipesList] = useState([])

  useEffect(() => {
    const getRecipesList = async () => {
      const recipesCollection = collection(db, "recipes")
      const recipesSnapShot = await getDocs(recipesCollection)
      const recipes = recipesSnapShot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id
      }))
      setRecipesList(recipes);
      console.log(recipesList)
    }
    getRecipesList();
  }, [])

  return (
    <main className="my-3 container">
      <div className="d-flex justify-content-between">
        <h4>Recipes List</h4>
        <Link href={"/recipes/create"} className="btn btn-primary">Add New Recipe</Link>
      </div>
      <div className="d-flex flex-wrap">
        {recipesList.map(item => {
          return item.imageUrl ? < RecipeCard props={item} ></RecipeCard> : null;
        }

        )}

      </div>
    </main >
  );
}
