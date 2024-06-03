"use client"
import { useState } from "react"
export default function CreateRecipe() {
    const [title, setTitle] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [file, setFile] = useState(null)

    const handleImageUpload = (e) => {
        setFile(e.target.files[0])

    }

    return (
        <div
            className="d-flex align-items-center justify-content-center"
            style={{ "height": "80vh" }}
        >
            <form action="">
                <h1 className="mb-3 text-center">Create Recipe</h1>
                <div className="mb-3">
                    <input
                        className="form-control"
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Title"
                        required
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={ingredients}
                        onChange={e => setIngredients(e.target.value)}
                        placeholder="Ingredients"
                        required>
                    </textarea>
                </div>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        type="text"
                        value={instructions}
                        onChange={e => setInstructions(e.target.value)}
                        placeholder="Instructions"
                        rows={5}
                        required>
                    </textarea>
                </div>
                <div className="mb-3">
                    <input type="file" className="form-control" onChange={handleImageUpload} required />
                </div>
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}
