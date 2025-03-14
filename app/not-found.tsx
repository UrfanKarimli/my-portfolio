"use client"

import { useTranslations } from "next-intl";
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function NotFound() {
	const t = useTranslations("notFound");

	const router = useRouter()
	return (
		<div className=" sticky z-20 h-screen flex flex-col justify-center items-center gap-2">
			<h2 className=" text-myWhite text-3xl">{t("title")}</h2>
			<p className=" text-myWhite">{t("description")}</p>
			<button onClick={() => router.back()} className="hover:text-red-600 text-myYellow">
			{t("prevPage")}
			</button>
			<Link className="text-myYellow hover:text-red-600" href="/">
			{t("homepage")}
			</Link>
		</div>
	)
}
