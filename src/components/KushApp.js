import React from "react";

import Bazuka_buble_gum from "./Bazuka_buble_gum";
import The_Hangover from "./The_Hangover";
import Purple_Kush from "./Purple_Kush";
import Godzilla from "./Godzilla";
import Jedi_Skywalker from "./Jedi_Skywalker";
import Fun_Dip from "./Fun_Dip";
import Sour_Patch_Kids from "./Sour_Patch_Kids";
import Good_Time from "./Good_Time";
import Subtotal from "./Subtotal";

export default class KushApp extends React.Component {
  constructor(props) {
    super(props);
    this.bazuka = this.bazuka.bind(this);
    this.purple = this.purple.bind(this);
    this.godzilla = this.godzilla.bind(this);
    this.jedi = this.jedi.bind(this);
    this.dip = this.dip.bind(this);
    this.sour = this.sour.bind(this);
    this.hangover = this.hangover.bind(this);
    this.goodTime = this.goodTime.bind(this);
    this.state = {
      bazuka: 0,
      purple: 0,
      godzilla: 0,
      jedi: 0,
      funDip: 0,
      sourPatch: 0,
      hangover: 0,
      goodTime: 0
    };
  }

  bazuka(bazukaTotal) {
    this.state.bazuka = bazukaTotal;
    this.forceUpdate();
  }
  purple(purpleTotal) {
    this.state.purple = purpleTotal;
    this.forceUpdate();
  }
  godzilla(godzillaPrice) {
    this.state.godzilla = godzillaPrice;
    this.forceUpdate();
  }
  jedi(jediPrice) {
    this.state.jedi = jediPrice;
    this.forceUpdate();
  }
  dip(dipPrice) {
    this.state.funDip = dipPrice;
    this.forceUpdate();
  }
  sour(sourPrice) {
    this.state.sourPatch = sourPrice;
    this.forceUpdate();
  }
  hangover(hangoverPrice) {
    this.state.hangover = hangoverPrice;
    this.forceUpdate();
  }
  goodTime(goodTimePrice) {
    this.state.goodTime = goodTimePrice;
    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <center>
          <div className="container-1">
            <div>
              <Purple_Kush purple={this.purple} />
            </div>
            <div>
              <Bazuka_buble_gum bazuka={this.bazuka} />
            </div>
            <div>
              <Godzilla godzilla={this.godzilla} />
            </div>
            <div>
              <Jedi_Skywalker jedi={this.jedi} />
            </div>
            <div>
              <Fun_Dip dip={this.dip} />
            </div>
            <div>
              <Sour_Patch_Kids sour={this.sour} />
            </div>
            <div>
              <The_Hangover hangover={this.hangover} />
            </div>
            <div>
              <Good_Time goodTime={this.goodTime} />
            </div>
          </div>
        </center>
        <Subtotal
          bazuka={this.state.bazuka}
          purple={this.state.purple}
          godzilla={this.state.godzilla}
          jedi={this.state.jedi}
          funDip={this.state.funDip}
          sourPatch={this.state.sourPatch}
          hangover={this.state.hangover}
          goodTime={this.state.goodTime}
        />
      </div>
    );
  }
}
