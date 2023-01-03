import { v4 as uuidv4 } from 'uuid';
import QuickRequest from './req.png';
import vpnpr from './VPN.png';
import food from './food.png';
import ad from './ad.png';



const projects = [
  {
    id: uuidv4(),
    name: 'Quick Request (No Github link)',
    desc:
      'A web app to send and receive requests to/from employees and be able to send a response back a properly documenting every request in a database',
    img: QuickRequest,
  },
  {
    id: uuidv4(),
    name: 'VPN',
    desc:
      'Set up a VPN using a Raspberry Pi added some configuration to monitor the incoming and outgoing traffic.',
    img: vpnpr,
    link:"https://github.com/SamyG12/ReadMe-for-PiVPn"
  },
  {
    id: uuidv4(),
    name: 'Food blog',
    desc:
      'Web app that contains different types of receipes. The user can create an account to add more receipes and like or comment the existing ones',
    img: food,
    link:"https://github.com/SamyG12/food-talk"
  },
  {
    id: uuidv4(),
    name: 'Ad Blocker (No Github link)',
    desc:
      'network-wide ad-blocker that protects your network from ads and trackers.',
    img: ad,
  },
  
];

export default projects;