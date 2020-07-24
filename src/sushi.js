class Sushi {
  constructor(outlineColor, fillColor, special = false) {
    this.outlineColor = outlineColor;
    this.fillColor = fillColor;
    this.special = special;
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    if (this.special) {
      document.dispatchEvent(new CustomEvent("success", { detail: this }));
    } else {
      document.dispatchEvent(new Event("bad guess"));
    }
  }

  append() {
    const sushiReward = document.getElementById("sushi-reward");
    const sushiSVG = this.generateSVG();
    sushiReward.appendChild(sushiSVG);
  }

  render() {
    const sushiContainer = document.createElement("div");
    sushiContainer.className = "sushi";
    sushiContainer.onclick = this.onClick;
    const sushiSVG = this.generateSVG();
    sushiContainer.appendChild(sushiSVG);

    return sushiContainer;
  }

  generateSVG() {
    const xmlns = "http://www.w3.org/2000/svg";
    const sushiSVG = document.createElementNS(xmlns, "svg");
    sushiSVG.setAttributeNS(null, "viewBox", "93.1 184.5 301.931 126.8");

    const sushiG = document.createElementNS(xmlns, "g");
    const path0 = this.generatePath(
      "#D3D5D6",
      "M358.8,243.3c-2.3,0-6.1,0.1-9,0.3c-7-7.6-19-16.9-35.5-25.2c-20.5-10.3-55-22.6-103.4-22.6 c-29.4,0-54.6,3.9-74.9,11.7c-17.8,6.8-30.9,16.2-37.7,27.2c-5.7,9.1-6.6,18.6-2.6,26.8c0.4,0.9,1.3,2.2,2.9,3.8 c-3.5,5.3-5.4,10.5-5.4,15.5c0,18.2,23.1,23.8,40.4,26.5c21.6,3.3,50.8,4,88.1,4c37.3,0,66.5-0.7,88.1-4 c15.6-2.4,35.9-7.2,39.8-21.5c5.7,6,17.7,17.3,29,19.6c1,0.2,2,0.3,2.8,0.3c4,0,6-2.2,6.8-3.5c2.8-4.7-0.3-10.8-3.6-17.2 c-0.3-0.6-0.6-1.2-1-1.9c3.4-3,4.8-8.7,5.3-13c3.4-2.5,7.1-7.5,5.9-15.3C394,249.9,389.5,243.3,358.8,243.3z"
    );
    sushiG.appendChild(path0);
    const sushiG2 = document.createElementNS(xmlns, "g");

    //path 1
    const path1 = this.generatePath(
      "#FFFFFF",
      "M221.7,290c41.6,0,109.3,0,117.7-16.9c-0.4-0.1-0.8-0.2-1.2-0.2c-17.4-4.2-123.9-5.4-177.8-5.4 c-28.3,0-44.4-3.9-53.4-8.1c-2.4,3.7-3.7,7.1-3.7,10.1C103.2,290,177.4,290,221.7,290z"
    );
    //path 2
    const path2 = this.generatePath(
      "#8A8C8E",
      "M344.9,273.7C344.9,273.7,344.9,273.7,344.9,273.7c-1.7,0-3.6-0.2-5.5-0.6 C331.1,290,263.3,290,221.7,290c-44.3,0-118.5,0-118.5-20.5c0-3,1.3-6.4,3.7-10.1c-4-1.8-6.6-3.8-8.4-5.4 c-3.5,5.3-5.4,10.5-5.4,15.5c0,18.2,23.1,23.8,40.4,26.5c21.6,3.3,50.8,4,88.1,4c37.3,0,66.5-0.7,88.1-4 c15.6-2.4,35.9-7.2,39.8-21.5c-0.4-0.4-0.7-0.8-1-1.1C347.4,273.6,346.2,273.7,344.9,273.7z"
    );
    // path 3 (outline)
    const path3 = this.generatePath(
      // "#D9432D",
      this.outlineColor,
      "M358.8,232c-2.3,0-6.1,0.1-9,0.3c-7-7.6-19-16.9-35.5-25.2c-20.5-10.3-55-22.6-103.4-22.6 c-29.4,0-54.6,3.9-74.9,11.7c-17.8,6.8-30.9,16.2-37.7,27.2c-5.7,9.1-6.6,18.6-2.6,26.8c0.4,0.9,1.3,2.2,2.9,3.8 c1.8,1.7,4.4,3.6,8.4,5.4c9.1,4.2,25.1,8.1,53.4,8.1c53.9,0,160.4,1.1,177.8,5.4c0.4,0.1,0.8,0.2,1.2,0.2 c2,0.4,3.8,0.6,5.5,0.6c0,0,0,0,0,0c1.3,0,2.5-0.1,3.6-0.3c0.3,0.3,0.7,0.7,1,1.1c5.7,6,17.7,17.3,29,19.6c1,0.2,2,0.3,2.8,0.3 c4,0,6-2.2,6.8-3.5c2.8-4.7-0.3-10.8-3.6-17.2c-0.3-0.6-0.6-1.2-1-1.9c3.4-3,4.8-8.7,5.3-13c3.4-2.5,7.1-7.5,5.9-15.3 C394,238.6,389.5,232,358.8,232z M104.7,245.8c-2.5-5.1-1.8-11,2.1-17.2c6.8-10.9,23.5-22.3,51.6-28.8 c-1.9,7.1-3.9,18.2-2.9,32.2l10-0.7c-1.2-16.7,2.4-29,4.1-33.8c7.7-1.3,16-2.2,25.2-2.7c-2.1,6.9-4.7,19-3.6,34.7l10-0.7 c-1.2-17.5,2.7-30.1,4.3-34.4c1.8,0,3.7-0.1,5.5-0.1c7.1,0,13.8,0.3,20.4,0.8c-2.1,6.9-4.6,18.9-3.5,34.3l10-0.7 c-1.1-15.5,1.9-27.2,3.7-32.6c8.6,1,16.8,2.5,24.3,4.2c-2.1,6.8-4.9,19.1-3.8,35.2l10-0.7c-1-15,1.7-26.4,3.5-32.1 c7,2,13.5,4.2,19.5,6.5c-2.1,6.8-4.9,19.1-3.8,35.2l10-0.7c-0.9-13.8,1.3-24.5,3.1-30.5c25.7,11.8,40,25.8,42.5,31.5 c3.1,7,4,14.3,2.1,17.2c-0.3,0.4-1,1.6-4,1.6c0,0,0,0,0,0c-1.2,0-2.7-0.2-4.3-0.6c-22.9-5.6-173.8-5.6-180.2-5.6 C112,257.5,104.7,245.9,104.7,245.8z M272.5,196.9L272.5,196.9L272.5,196.9L272.5,196.9z"
    );
    // path 4 (fill)
    const path4 = this.generatePath(
      // "#EF4A32",
      this.fillColor,
      "M340.6,263.1c1.6,0.4,3.1,0.6,4.3,0.6c0,0,0,0,0,0c3,0,3.7-1.1,4-1.6c1.9-2.9,1-10.1-2.1-17.2 c-2.5-5.7-16.8-19.7-42.5-31.5c-1.8,6-4,16.8-3.1,30.5l-10,0.7c-1.1-16.1,1.6-28.4,3.8-35.2c-6-2.4-12.5-4.6-19.5-6.5 c-1.8,5.6-4.6,17-3.5,32.1l-10,0.7c-1.1-16.1,1.7-28.5,3.8-35.2c-7.6-1.7-15.7-3.2-24.3-4.2c-1.8,5.4-4.8,17.1-3.7,32.6 l-10,0.7c-1.1-15.4,1.4-27.4,3.5-34.3c-6.5-0.5-13.3-0.8-20.4-0.8c-1.9,0-3.7,0-5.5,0.1c-1.6,4.3-5.6,16.9-4.3,34.4l-10,0.7 c-1.1-15.7,1.5-27.8,3.6-34.7c-9.1,0.5-17.5,1.4-25.2,2.7c-1.7,4.8-5.3,17-4.1,33.8l-10,0.7c-1-14,1-25.1,2.9-32.2 c-28.1,6.5-44.8,17.9-51.6,28.8c-3.8,6.1-4.6,12.1-2.1,17.2c0,0.1,7.3,11.7,55.8,11.7C166.8,257.5,317.7,257.6,340.6,263.1z"
    );
    //polygon
    const polygon = document.createElementNS(xmlns, "polygon");
    polygon.setAttributeNS(null, "fill", "#EF4A32");
    polygon.setAttributeNS(
      null,
      "points",
      "272.5,196.9 272.5,196.9 272.5,196.9"
    );
    // append path1-4 and polygon
    sushiG2.append(path1, path2, path3, path4, polygon);
    sushiG.appendChild(sushiG2);
    sushiSVG.appendChild(sushiG);
    return sushiSVG;
  }

  generatePath(fillColor, d) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttributeNS(null, "fill", fillColor);
    path.setAttributeNS(null, "d", d);
    return path;
  }
}

export default Sushi;
