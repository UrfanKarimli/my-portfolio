"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NotFound() {
	const router = useRouter()
	return (
		<div className=" sticky z-20 h-screen flex flex-col justify-center items-center gap-2">
			<h2 className=" text-myWhite text-3xl">Not Found</h2>
			<p className=" text-myWhite">Could not find requested resource</p>
			<button onClick={() => router.back()} className="hover:text-red-600 text-myYellow">
				Return Previous Page
			</button>
			<Link className="text-myYellow hover:text-red-600" href="/">
				Return Home
			</Link>
		</div>
	)
}
