import DarkTheme from '../layouts/Dark'
import LightTheme from '../layouts/Light';
import Demos from "./demos";
import Homepage1 from './home/home1-light';
import Homepage2 from './home/home2-light'
import Homepage from './home';
import ShowcaseLight from './showcase/showcase-light';
export default function Home() {
  return (
    <LightTheme>
      {/* <Homepage1/> */}
      {/* <Homepage/> */}
      <ShowcaseLight/>
      {/* <Homepage2/> */}
      {/* <Demos /> */}
    </LightTheme>
  )
}
