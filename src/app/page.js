import Hero from "@/components/Hero";
import JumuahAnnouncement from "@/components/JumuahAnnouncement";
import PrayerTable from "@/components/PrayerTable";
import SocialFeed from "@/components/SocialFeed";

export default function Home() {
  return (
    <>
      <Hero />
      <JumuahAnnouncement />
      <PrayerTable />
      <SocialFeed />
    </>
  );
}
