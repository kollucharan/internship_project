import HeaderComponent from "../Header/Headercomponent";
import FilterComponent from "../Filter/Filtercomponent";
import CardComponent from "../Card/Cardcomponent";
function HomeComponent({searchvalue,Setsearchvalue,countincart,Setcountincart,detailsincart,Setdetailsincart}) {
  return (
    <div>
      <div>
        <HeaderComponent  searchvalue={searchvalue} Setsearchvalue={Setsearchvalue} countincart={countincart} Setcountincart={Setcountincart} />
      </div>

      <div style={{ display: "flex" }}>
        <FilterComponent />
        <CardComponent searchvalue={searchvalue} countincart={countincart} Setcountincart={Setcountincart} detailsincart={detailsincart} Setdetailsincart={Setdetailsincart} />
      </div>
    </div>
  );
}
export default HomeComponent;