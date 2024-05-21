import Link from "next/link";

export default function Header() {
    return (
        <div>
            <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div class="container">
                    <Link href={"/"} class="navbar-brand">My Recipes</Link>
                    <Link href={"/signin"} class="btn btn-outline-success">Sign In</Link>
                </div>
            </nav>
        </div>
    )
}
