"use client"
import { useState } from "react"
export default function CreateRecipe() {
    const [title, setTitle] = useState("");
    const [ingredient, setIngredient] = useState("");
    const [instructions, setInstructions] = useState("");
    const [file, setFile] = useState(null)
    return (
        <div>
            <form action="">
                <div className="mb-3">
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="title"
                    />
                </div>
                <div className="mb-3"></div>
                <div className="mb-3"></div>
                <div className="mb-3"></div>
            </form>
        </div>
    )
}
