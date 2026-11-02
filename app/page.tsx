import HeroSection from '@/components/sections/HeroSection'
import ServicesPreview from '@/components/sections/ServicesPreview'
import PartnershipStrip from '@/components/sections/PartnershipStrip'
import LatestBlogsSection from '@/components/sections/LatestBlogsSection'
import CTAStrip from '@/components/sections/CTAStrip'

export default function HomePage() {
  return (
    <>
      <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-between pb-8 sm:pb-10 lg:pb-12 bg-white">
        <HeroSection />
        <PartnershipStrip />
      </div>
      <ServicesPreview />
      <PartnershipStrip variant="thin" />
      <LatestBlogsSection />
      <CTAStrip />
    </>
  )
}
