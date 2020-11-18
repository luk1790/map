function createMap() {
  let htmlElement = document.createElement("div");

  let createImg = ({ urlImage, map, display, id, className }) => {
    let img = document.createElement("img");
    img.src = urlImage;
    img.useMap = map;
    img.id = id;
    img.className = className;
    img.style = display ? "display:inline" : "display: none;";

    return img;
  };

  let createArea = ({ coords, href }) => {
    let area = document.createElement("area");
    area.shape = "poly";
    area.coords = coords;
    area.href = href;
    return area;
  };

  let map = document.createElement("map");
  map.name = "workmap";
  map.appendChild(
    createArea({
      coords:
        "17,81,70,67,116,57,130,50,148,29,159,59,163,116,155,128,142,130,145,152,122,168,105,161,25,203,11,178,22,161,18,84",
      href: "javascript:test('zachodniopomo')",
    })
  );

  map.appendChild(
    createArea({
      coords:
        "54,335,134,300,201,350,150,447,138,452,120,430,133,416,115,397,50,358,50,340,",
      href: "javascript:test('dolnoMap')",
    })
  );
  map.appendChild(
    createArea({
      coords:
        "28,210,38,211,51,192,75,185,76,180,84,178,108,168,108,184,102,197,95,229,98,249,109,279,132,291,125,301,105,287,83,318,70,315,63,324,53,319,47,329,41,315,33,314,37,304,32,287,36,253,26,237,34,225,32,215",
      href: "javascript:test('lubuskieMap')",
    })
  );
  map.appendChild(
    createArea({
      coords:
        "116,178,131,175,140,166,139,161,156,150,144,136,157,131,170,131,189,132,188,147,194,156,186,159,185,181,196,189,194,202,197,213,242,231,275,249,284,247,289,252,280,263,269,268,269,285,256,293,247,327,236,328,226,340,232,357,220,360,215,343,216,333,204,333,206,326,187,312,173,317,154,308,125,277,109,264,106,231,102,207,110,205,115,177,133,173,147,159,155,149,146,136,",
      href: "javascript:test('mapaWielkopolskie')",
    })
  );
  map.appendChild(
    createArea({
      coords:
        "204,365,212,362,218,365,237,365,262,372,262,390,256,396,254,412,264,422,250,421,245,448,231,457,224,473,213,473,205,463,213,459,210,446,200,446,164,430,204,365,215,361,",
      href: "javascript:test('mapaOpolskie')",
    })
  );
  map.appendChild(
    createArea({
      coords:
        "269,376,283,368,287,374,298,379,303,376,312,385,330,397,327,408,337,413,334,429,311,433,291,481,312,511,295,529,286,533,286,525,282,524,274,504,265,501,262,485,231,471,252,454,252,433,265,422,260,411,269,374,",
      href: "javascript:test('mapaSlaskie')",
    })
  );
  map.appendChild(
    createArea({
      coords:
        "344,430,359,433,369,457,422,444,433,523,418,526,412,537,403,536,394,533,365,536,352,550,341,550,339,536,330,534,315,502,295,481,315,454,311,451,316,440,344,431,",
      href: "javascript:test('mapaMalopolskie')",
    })
  );
  map.appendChild(
    createArea({
      coords:
        "427,441,464,399,478,398,478,409,498,422,493,435,518,445,537,445,548,436,562,445,513,514,518,543,529,562,439,525,424,445,",
      href: "javascript:test('mapaPodkarpackie')",
    })
  );
  map.appendChild(
    createArea({
      coords:
        "377,353,410,367,426,374,444,372,452,373,460,394,420,440,374,452,365,429,341,421,345,413,337,406,339,379,350,384,351,370,351,362,375,350,",
      href: "javascript:test('mapaSwietokrzyskie')",
    })
  );
  map.appendChild(
    createArea({
      coords:
        "242,354,239,341,255,332,257,300,269,295,276,288,274,277,286,269,294,251,303,247,320,256,338,254,355,273,356,284,365,292,382,292,384,309,369,308,375,332,360,352,350,356,344,363,346,375,337,372,329,387,",
      href: "javascript:test('mapaLodzkie')",
    })
  );
  map.appendChild(
    createArea({
      coords:
        "289,243,283,238,276,245,255,230,200,205,204,192,193,183,195,164,200,155,194,141,201,125,217,126,229,113,295,127,304,148,324,165,314,185,302,238,",
      href: "javascript:test('mapaKujawskie')",
    })
  );
  map.appendChild(
    createArea({
      coords:
        "164,29,249,6,264,47,298,52,298,82,314,92,312,101,303,98,293,118,278,118,278,111,233,100,194,124,176,124,169,118,165,30,",
      href: "javascript:test('mapaPomorskie')",
    })
  );
  map.appendChild(
    createArea({
      coords:
        "530,252,560,265,557,288,557,319,598,402,594,423,578,424,566,439,551,430,516,438,501,431,508,422,486,405,486,396,467,393,460,326,447,319,466,299,462,283,509,272,532,250,",
      href: "javascript:test('mapaLubelskie')",
    })
  );
  map.appendChild(
    createArea({
      coords:
        "333,171,366,171,374,161,434,139,437,161,457,187,470,195,482,207,482,222,495,239,523,249,517,263,503,260,460,274,459,289,458,303,451,308,443,308,444,322,452,327,453,369,435,371,415,363,379,344,383,326,375,315,390,315,390,294,378,286,367,284,364,272,351,256,342,247,326,251,311,242,330,170,",
      href: "javascript:test('mapaMazowieckie')",
    })
  );
  map.appendChild(
    createArea({
      coords:
        "505,42,537,64,568,159,573,204,549,219,533,242,503,237,490,221,488,201,474,189,463,188,458,170,444,165,441,139,501,96,504,85,495,68,489,62,505,49,",
      href: "javascript:test('mapaPodlaskie')",
    })
  );
  map.appendChild(
    createArea({
      coords:
        "334,43,420,55,499,47,483,59,499,86,455,128,372,155,365,164,331,163,326,147,297,123,307,104,318,107,319,91,312,84,302,78,306,68,305,61,332,46,",
      href: "javascript:test('mapaWarminsko')",
    })
  );

  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapa.png",
      map: "#workmap",
      id: "mainMap",
      display: true,
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaZachodnio.png",
      map: "#workmap",
      id: "zachodniopomo",
      className: "country",
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaDolnoslaskie.png",
      map: "#workmap",
      id: "dolnoMap",
      className: "country",
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaLubuskie.png",
      map: "#workmap",
      id: "lubuskieMap",
      className: "country",
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaWielkopolskie.png",
      map: "#workmap",
      id: "mapaWielkopolskie",
      className: "country",
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaOpolskie.png",
      map: "#workmap",
      id: "mapaOpolskie",
      className: "country",
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaSlaskie.png",
      map: "#workmap",
      id: "mapaSlaskie",
      className: "country",
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaMalopolskie.png",
      map: "#workmap",
      id: "mapaMalopolskie",
      className: "country",
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaPodkarpackie.png",
      map: "#workmap",
      id: "mapaPodkarpackie",
      className: "country",
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaSwietokrzyskie.png",
      map: "#workmap",
      id: "mapaSwietokrzyskie",
      className: "country",
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaLodzkie.png",
      map: "#workmap",
      id: "mapaLodzkie",
      className: "country",
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaKujawskie.png",
      map: "#workmap",
      id: "mapaKujawskie",
      className: "country",
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaPomorskie.png",
      map: "#workmap",
      id: "mapaPomorskie",
      className: "country",
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaLubelskie.png",
      map: "#workmap",
      id: "mapaLubelskie",
      className: "country",
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaMazowieckie.png",
      map: "#workmap",
      id: "mapaMazowieckie",
      className: "country",
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaPodlaskie.png",
      map: "#workmap",
      id: "mapaPodlaskie",
      className: "country",
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaWarminsko.png",
      map: "#workmap",
      id: "mapaWarminsko",
      className: "country",
    })
  );

  htmlElement.appendChild(map);
  return htmlElement;
}

document.getElementById("displayMap").appendChild(createMap());

let checkCountry = [];
function test(image) {
  console.log("test");

  let img2 = document.getElementById(image);
  console.log(img2.style.display);
  img2.style.display = img2.style.display === "none" ? "inline" : "none";
  console.log(document.getElementById("countryName").value);

  if (checkCountry.findIndex((elem) => elem === image) < 0) {
    checkCountry.push(image);
  } else {
    checkCountry = checkCountry.filter((elem) => elem !== image);
  }
  document.getElementById("countryName").innerText = checkCountry.join(" ,");
}
