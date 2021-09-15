import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

function FloorPlan() {
  return (
    <div className='grid'>
      <Bedroom bedNum='1' className='bedroom' />
      <LivingRoom className='livingRoom' />
      <Kitchen className='kitchen' />
      <Bath size='Full' className='fullBath' />
      <Bedroom bedNum='2' className='bedroom2' />
      <Bath size='Half' className='halfBath' />
      <Bedroom bedNum='3' className='bedroom3' />
    </div>
  );
}

export default FloorPlan;
