import AboutHero from "@/components/about-us/about-hero"
import ManagingDirectorSection from "@/components/about-us/managing-director-section"
import TeamMembersGrid, { type TeamMember } from "@/components/about-us/team-members-grid"
import LicensesCertifications from "@/components/about-us/licenses-certificates"
import CompanyPolicySection from "@/components/about-us/company-policy"
import BecomeAPartner from "@/components/about-us/become-a-partner" // Import the component

export default function AboutPage() {
  const managingDirectorData = {
    name: "Shiva Prasad Dhakal",
    title: "Managing Director & Founder",
    headshotSrc: "/images/managing-director.jpg",
    headshotAlt: "Shiva Prasad Dhakal, Managing Director of Himkala Adventure",
    background: "Starting his career as a porter, Shiva Prasad Dhakal has grown into a respected leader in Nepal’s tourism industry. Today, as Managing Director, he guides Himkala Adventure with a commitment to offering authentic, eco-friendly trekking experiences that honor Nepal’s natural beauty and rich cultural heritage.",
    vision: "Committed to making adventure travel available to all, while safeguarding the landscapes and cultural traditions that make each journey meaningful. Our focus is on responsible travel that creates value for both visitors and local communities.",
    yearsExperience: 25,
    achievements: [
      { label: "Certified Trekking Guide", year: "2000" },
      { label: "Certified Tour Guide", year: "2010" },
      { label: "Five times continuous receiver of Trip Advisor Excellence certificate.", year: "2016" },
      { label: "First to start the Free Walking Tour in Kathmandu", year: "2017" }
    ],
    quote: "Adventure is shaped not just by where you go, but by the people, culture, and meaningful moments you encounter along the way.",
    quoteAttribution: "Shiva Prasad Dhakal",
    orientation: "image-left" as const
  }

  const teamMembers: TeamMember[] = [
    {
      id: "sabinaya-dhakal",
      name: "Sabinaya Dhakal",
      title: "Professional Certified Trekking Guide and IT facilitator",
      years: 6,
      bio: "Sabinaya has a strong background in high-altitude trekking and also manages various IT tasks within the company. His calm approach, safety awareness, and knowledge of the region make him a dependable part of our team.",
      photoUrl: "/images/sabinaya.jpg",
      alt: "Sabinaya Dhakal, Trekking Guide and IT facilitator"
    },
    
  ]

  const certificationsData = [
    {
      title: "Certificate of Incorporation Company",
      issuingOrganization: "Office of Company Registrar",
      issueDate: "January 26, 2015",
     
      credentialId: "131462/071/072",
     
      description: "Legal document officially establishing the company as a registered legal entity.",
      imageSrc: "/images/certificate-of-incorporation-company.jpg",
  
    },
    {
      title: "Certificate of tourism industry division ",
      issuingOrganization: "Department of Tourism",
      issueDate: "June 2021",
      credentialId: "LNT-ME-2177",
      description: "Training in sustainable outdoor practices and environmental stewardship",
      // No image - will show default document icon
    },
    {
      title: "Trekking Guide Certification",
      issuingOrganization: "Nepal Academy of Tourism & Hotel Management",
      issueDate: "January 2019",
      credentialId: "TGC-NATHM-2019-0451",
      description: "Official certification for professional trekking guides in Nepal",
      imageSrc: "/images/certifications/trekking-guide-certificate.jpg",
      imageAlt: "Trekking Guide Certification"
    },
    {
      title: "Advanced Mountaineering Course",
      issuingOrganization: "Nepal Mountaineering Association",
      issueDate: "November 2020",
      expirationDate: "November 2025",
      credentialId: "AMC-NMA-2020-1289",
      description: "Advanced technical skills for high-altitude mountaineering expeditions",
      // No image - will show default document icon
    },
    {
      title: "Wilderness Emergency Medical Technician",
      issuingOrganization: "Wilderness Medical Associates",
      issueDate: "August 2021",
      expirationDate: "August 2024",
      credentialId: "WEMT-2021-7821",
      credentialUrl: "https://example.com/verify/7821",
      description: "Comprehensive medical training for wilderness environments",
      imageSrc: "/images/certifications/wilderness-emt.jpg",
      imageAlt: "Wilderness EMT Certification"
    },
    {
      title: "Sustainable Tourism Practices",
      issuingOrganization: "Global Sustainable Tourism Council",
      issueDate: "February 2023",
      credentialId: "GSTC-STP-2023-3356",
      description: "Certification in environmentally and culturally responsible tourism operations",
      // No image - will show default document icon
    }
  ]

  return (
    <main className="min-h-screen bg-background">
      <AboutHero
        imageSrc="/images/about-us-hero.png"
        imageAlt="Mountain landscape with adventurers"
        title="Get to Know Us"
        description="As trusted Nepal trekking and expedition experts, we offer professional advice and comprehensive planning for adventure travel. Our team’s deep field experience ensures every trek and expedition is safe, well-organized, and tailored to your goals."
  overlay="bg-gradient-to-b from-gray-900/80 sm:from-gray-900/70 via-gray-800/60 sm:via-gray-800/50 to-gray-900/40 sm:to-gray-900/30"        priority={true}
      />

      <div className="container mx-auto px-4 py-16 space-y-16">
        <ManagingDirectorSection 
          {...managingDirectorData}
          className="mb-16"
        />
        
        {/* Added BecomeAPartner component here */}
        <BecomeAPartner />
        
        <LicensesCertifications
          title="Our Certifications & Accreditations"
          subtitle="Demonstrating our commitment to safety, quality, and professional standards"
          items={certificationsData}
          className="my-16"
        />
        
        <TeamMembersGrid
          heading="Meet Our Team"
          subheading="We are passionate about creating authentic, safe, and transformative travel experiences."
          members={teamMembers}
          desktopCols={3}
          align="left"
        />

        <CompanyPolicySection />
      </div>
    </main>
  )
}