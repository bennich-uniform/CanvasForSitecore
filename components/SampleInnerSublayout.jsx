import { Slot } from '@uniformdev/canvas-react';

export function SampleInnerSublayout() {
  return (
    <div id="InnerCenter">
      <div id="Header">
        <img src="https://sc93.sc/-/media/Default Website/sc_logo.ashx" alt="Sitecore" id="scLogo" />
      </div>
      <div id="Content">
        <div id="LeftContent">
          <Slot name="content"></Slot>
        </div>
      </div>
      <div id="Footer">
        <hr className="divider" />© {new Date().getFullYear()} Sitecore
      </div>
    </div>
  );
}