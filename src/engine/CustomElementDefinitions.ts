import { Booster } from "./cards/Booster";
import { Potion } from "./cards/Potion";
import { Tank } from "./cards/Tank";
import { Weakling } from "./cards/Weakling";

customElements.define("card-tank", Tank);
customElements.define("card-weakling", Weakling);
customElements.define("card-booster", Booster);
customElements.define("card-potion", Potion);