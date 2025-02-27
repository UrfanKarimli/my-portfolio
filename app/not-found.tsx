"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NotFound() {
	const router = useRouter()
	return (
		<div className=" h-screen flex flex-col justify-center items-center gap-2">
			<h2 className=" text-3xl">Not Found</h2>
			<p>Could not find requested resource</p>
			<button onClick={() => router.back()} className="hover:text-red-600">
				Return Previous Page
			</button>
			<Link className=" hover:text-red-600" href="/">
				Return Home
			</Link>
		</div>
	)
}
