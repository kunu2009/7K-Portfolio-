import Header from "@/components/header";
import { SettingsDashboard } from "@/components/settings-dashboard";
import Footer from "@/components/footer";

export default function SettingsPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Header />
      <main className="flex-1 py-12 md:py-24">
        <div className="container">
            <SettingsDashboard />
        </div>
      </main>
      <Footer />
    </div>
  );
}
