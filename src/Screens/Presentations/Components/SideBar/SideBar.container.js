// Components
import SideBarView from './SideBar.view';

// Constants
import PRESENTATIONS from 'Constants/presentations';

export function SideBarContainer() {
  return (
    <SideBarView options={PRESENTATIONS} />
  );
}

export default SideBarContainer;
