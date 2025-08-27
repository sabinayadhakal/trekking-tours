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
    headshotSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0be1ec1c-c0d9-4e55-b25d-dd0e7300017e/generated_images/professional-corporate-headshot-of-a-con-3d80c316-20250823023854.jpg",
    headshotAlt: "Shiva Prasad Dhakal, Managing Director of Himkala Adventure",
    background: "Shiva Prasad Dhakal, Managing Director of Himkala Adventure, began his journey in tourism as a porter and has since spent over twenty years guiding more than 1,000 visitors from around the world. With extensive experience in trekking, touring, mountaineering, rafting, bungee jumping, and other adventure activities, he brings both expertise and passion to every journey. Himkala Adventure, under his leadership, offers authentic and eco-friendly trekking experiences that blend traditional practices with modern approaches, reflecting a deep respect for Nepal's breathtaking landscapes and rich cultural diversity.",
    vision: "To make adventure accessible to everyone while preserving the natural beauty and cultural heritage of the destinations we explore. We believe that travel should transform both the traveler and the places they visit.",
    yearsExperience: 25,
    achievements: [
      { label: "Certified Trekking Guide", year: "2000" },
      { label: "Certified Tour Guide", year: "2010" },
      { label: "Five times continuous receiver of Trip Advisor Excellence certificate.", year: "2016" },
      { label: "First to start the Free Walking Tour in Kathmandu", year: "2017" }
    ],
    quote: "Adventure isn't just about reaching the summit—it's about the connections you make, the cultures you experience, and the memories you create along the way.",
    quoteAttribution: "Shiva Prasad Dhakal",
    orientation: "image-left" as const
  }

  const teamMembers: TeamMember[] = [
    {
      id: "sabinaya-dhakal",
      name: "Sabinaya Dhakal",
      title: "Professional Certified Trekking Guide and IT facilitator",
      years: 6,
      bio: "Sabinaya specializes in high-altitude expeditions and has been to the highest passes of Nepal. His expertise in mountain safety, knowledge and cultural interpretation makes him one of our most sought-after guides.",
      photoUrl: "/images/sabinaya.jpg",
      alt: "Sabinaya Dhakal, Trekking Guide and IT facilitator"
    },
    
  ]

  const certificationsData = [
    {
      title: "Wilderness First Responder",
      issuingOrganization: "National Outdoor Leadership School",
      issueDate: "March 2022",
      expirationDate: "March 2024",
      credentialId: "WFR-2022-48932",
      credentialUrl: "https://example.com/verify/48932",
      description: "Advanced medical training for emergencies in remote settings",
      imageSrc: "/images/certifications/wilderness-first-responder.jpg",
      imageAlt: "Wilderness First Responder Certification"
    },
    {
      title: "Leave No Trace Master Educator",
      issuingOrganization: "Leave No Trace Center for Outdoor Ethics",
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
        imageSrc="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0be1ec1c-c0d9-4e55-b25d-dd0e7300017e/generated_images/professional-outdoor-adventure-landscape-689f7a08-20250823023843.jpg"
        imageAlt="Mountain landscape with adventurers"
        title="Meet Us and Collaborate"
        description="We provide professional advice regarding treks and expeditions in Nepal, and our experience in the field of adventure travels is extensive as we are experts in the realms of organizing and planning. "
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