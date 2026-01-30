import { DashboardLayout } from "./components/layout/DashboardLayout";
import { TotalEnergyConsumption } from "./components/widgets/TotalEnergyConsumption";
import { GreenConnections } from "./components/widgets/GreenConnections";
import { Recommendations } from "./components/widgets/Recommendations";
import { Tracking } from "./components/widgets/Tracking";
import { DetailedReport } from "./components/widgets/DetailedReport";
import { GreenEnergy } from "./components/widgets/GreenEnergy";

function App() {
  return (
    <DashboardLayout>
      {/* Row 1: Main Content */}
      <TotalEnergyConsumption />
      <GreenConnections />
      <Recommendations />

      {/* Row 2: Secondary Content */}
      <Tracking />
      <DetailedReport />
      <GreenEnergy />
    </DashboardLayout>
  );
}

export default App;
