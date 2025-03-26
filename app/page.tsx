import { redirect } from "next/navigation"

export default function Home() {
  // This ensures that the root path redirects to the dashboard
  redirect("/dashboard")
}

