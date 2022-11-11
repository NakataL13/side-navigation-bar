import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";

import "@trendmicro/react-sidenav/dist/react-sidenav.css";

const MySideNav = () => {
  return (
    <SideNav
      className="test2"
      onSelect={(selected) => {
        console.log(selected);
      }}
    >
      
      <SideNav.Nav defaultSelected="home" />
      <NavItem className="dashboard-text">
        <NavText>Табло</NavText>
        
      </NavItem>
      <NavItem className="nav-item header">
        <NavText>Справки</NavText>
        
      </NavItem>
      <NavItem className="nav-item child">
        <NavText>Справка стоки детайлна</NavText>
      </NavItem>

      <NavItem className="nav-item child">
        <NavText>Обща справка</NavText>
      </NavItem>

      <NavItem className="nav-item child">
        <NavText>Справка горива детайлна</NavText>
      </NavItem>

      <NavItem className="nav-item child">
        <NavText>Справка за държавна отстъпка</NavText>
      </NavItem>


    </SideNav>
  );
};

export default MySideNav;
