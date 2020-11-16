console.log("yyy");

function createMap() {
  let htmlElement = document.createElement("div");

  let createImg = ({ urlImage, map, display, id }) => {
    let img = document.createElement("img");
    img.src = urlImage;
    img.useMap = map;
    img.id = id;
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
  map.appendChild(createArea({
    coords: "17,81,70,67,116,57,130,50,148,29,159,59,163,116,155,128,142,130,145,152,122,168,105,161,25,203,11,178,22,161,18,84",
    href: "javascript:test('zachodniopomo')"
  }));

  map.appendChild(createArea({
    coords: "54,335,134,300,201,350,150,447,138,452,120,430,133,416,115,397,50,358,50,340,",
    href: "javascript:test('dolnoMap')"
  }));
  map.appendChild(createArea({
    coords: "28,210,38,211,51,192,75,185,76,180,84,178,108,168,108,184,102,197,95,229,98,249,109,279,132,291,125,301,105,287,83,318,70,315,63,324,53,319,47,329,41,315,33,314,37,304,32,287,36,253,26,237,34,225,32,215",
    href: "javascript:test('lubuskieMap')"
  }));
  map.appendChild(createArea({
    coords: "116,178,131,175,140,166,139,161,156,150,144,136,157,131,170,131,189,132,188,147,194,156,186,159,185,181,196,189,194,202,197,213,242,231,275,249,284,247,289,252,280,263,269,268,269,285,256,293,247,327,236,328,226,340,232,357,220,360,215,343,216,333,204,333,206,326,187,312,173,317,154,308,125,277,109,264,106,231,102,207,110,205,115,177,133,173,147,159,155,149,146,136,",
    href: "javascript:test('mapaWielkopolskie')"
  }));
  map.appendChild(createArea({
    coords: "204,365,212,362,218,365,237,365,262,372,262,390,256,396,254,412,264,422,250,421,245,448,231,457,224,473,213,473,205,463,213,459,210,446,200,446,164,430,204,365,215,361,",
    href: "javascript:test('mapaOpolskie')"
  }));
  map.appendChild(createArea({
    coords: "269,376,283,368,287,374,298,379,303,376,312,385,330,397,327,408,337,413,334,429,311,433,291,481,312,511,295,529,286,533,286,525,282,524,274,504,265,501,262,485,231,471,252,454,252,433,265,422,260,411,269,374,",
    href: "javascript:test('mapaSlaskie')"
  }));
  map.appendChild(createArea({
    coords: "344,430,359,433,369,457,422,444,433,523,418,526,412,537,403,536,394,533,365,536,352,550,341,550,339,536,330,534,315,502,295,481,315,454,311,451,316,440,344,431,",
    href: "javascript:test('mapaMalopolskie')"
  }));
  map.appendChild(createArea({
    coords: "427,441,464,399,478,398,478,409,498,422,493,435,518,445,537,445,548,436,562,445,513,514,518,543,529,562,439,525,424,445,",
    href: "javascript:test('mapaPodkarpackie')"
  }));
  map.appendChild(createArea({
    coords: "377,353,410,367,426,374,444,372,452,373,460,394,420,440,374,452,365,429,341,421,345,413,337,406,339,379,350,384,351,370,351,362,375,350,",
    href: "javascript:test('mapaSwietokrzyskie')"
  }));
  map.appendChild(createArea({
    coords: "242,354,239,341,255,332,257,300,269,295,276,288,274,277,286,269,294,251,303,247,320,256,338,254,355,273,356,284,365,292,382,292,384,309,369,308,375,332,360,352,350,356,344,363,346,375,337,372,329,387,",
    href: "javascript:test('mapaLodzkie')"
  }));
  map.appendChild(createArea({
    coords: "289,243,283,238,276,245,255,230,200,205,204,192,193,183,195,164,200,155,194,141,201,125,217,126,229,113,295,127,304,148,324,165,314,185,302,238,",
    href: "javascript:test('mapaKujawskie')"
  }));

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
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaDolnoslaskie.png",
      map: "#workmap",
      id: "dolnoMap",
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaLubuskie.png",
      map: "#workmap",
      id: "lubuskieMap",
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaWielkopolskie.png",
      map: "#workmap",
      id: "mapaWielkopolskie",
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaOpolskie.png",
      map: "#workmap",
      id: "mapaOpolskie",
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaSlaskie.png",
      map: "#workmap",
      id: "mapaSlaskie",
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaMalopolskie.png",
      map: "#workmap",
      id: "mapaMalopolskie",
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaPodkarpackie.png",
      map: "#workmap",
      id: "mapaPodkarpackie",
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaSwietokrzyskie.png",
      map: "#workmap",
      id: "mapaSwietokrzyskie",
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaLodzkie.png",
      map: "#workmap",
      id: "mapaLodzkie",
    })
  );
  htmlElement.appendChild(
    createImg({
      urlImage: "./maps/mapaKujawskie.png",
      map: "#workmap",
      id: "mapaKujawskie",
    })
  );
  htmlElement.appendChild(map);
  return htmlElement;
}

document.getElementById("displayMap").appendChild(createMap());

// do tworzenia coordynat
let coords = '';
document.getElementById('mainMap').addEventListener('click',(e)=>{
  // console.log(e)
  coords += `${e.offsetX},${e.offsetY},`;
  console.log('coords',coords);

})
function test(image) {
  console.log("test");

  let img2 = document.getElementById(image);
  console.log(img2.style.display);
  img2.style.display = img2.style.display === "none" ? "inline" : "none";
}
