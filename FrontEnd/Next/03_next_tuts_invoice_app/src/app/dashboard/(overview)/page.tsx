import RevenueChart from "@/components/dashboard/revenue-chart"
import LatestInvoices from "@/components/dashboard/latest-invoice"
import { lusitana } from "@/components/ui/fonts"
import { Suspense } from "react"
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from "@/components/ui/skeletons"
import CardWrapper from "@/components/dashboard/cards"


export default async function page() {
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>

            <Suspense fallback={<CardsSkeleton />}>
                <CardWrapper />
            </Suspense>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">

                <Suspense fallback={<RevenueChartSkeleton />}><RevenueChart /></Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}><LatestInvoices /></Suspense>

            </div>
        </main>
    )
}