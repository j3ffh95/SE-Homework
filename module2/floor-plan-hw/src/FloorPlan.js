import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

function FloorPlan() {
  return (
    <div>
      <Kitchen />
      <LivingRoom />
      <Bedroom bedNum='1' />
      <Bath />
    </div>
  );
}

export default FloorPlan;
