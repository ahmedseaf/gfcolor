import chroma from 'chroma-js';

/* 
paletteName: "Material UI Colors",
    id: "material-ui-colors",
    emoji: "🎨",
    colors: [
      { name: "red", color: "#F44336" },
      { name: "pink", color: "#E91E63" },
*/

const constructLevel = [900, 800, 700, 600, 500, 400, 300, 200, 100, 50];

function generateConstructPallet(mainPallet) {
  let newPalletColors = {
    paletteName : mainPallet.paletteName,
    id : mainPallet.id,
    emoji : mainPallet.emoji,
    colors : {}
  }

  for(let level of constructLevel) {
    newPalletColors.colors[level] = [];
  }
  
  for(let color of mainPallet.colors) {
    // generate 10 color construct from every color from mainColor
    let chromaScale = generateChromaScale(color.color, 10);
    
    for(let i in chromaScale) {
      // make object from constructLevel
      // ex-> object  900 contain {name: "Beekeeper 50", id: "beekeeper", hex: "#ffffff", rgb: "rgb(255,255,255)"}
      newPalletColors.colors[constructLevel[i]].push({
        name : `${color.name} ${constructLevel[i]}`,
        id   : color.name.toLowerCase().replace(/ /g, '-'),
        hex  : chromaScale[i],
        rgb  : chroma(chromaScale[i]).css(), 
        rgba : chroma(chromaScale[i]).css().replace('rgb', 'rgba').replace(')', ', 1.0)'),
      })
    }
  }

  return newPalletColors;
}

// ex- chroma([255, 51, 153]); -> #ff3399
//      - chroma([notBlack, varColor, white Color])
function getRange(hexColor){
  const end = '#fff';
  return [
    chroma(hexColor).darken(1.4).hex(),
    hexColor,
    end
  ];
}


/*
 * make range from One Color
 * ex1 - chroma.scale(['#fafa6e','#2A4858']).mode('lch').colors(6)
 *      return 6 colors from #fafa6e To #2A4858
 *      you can change mode chose one from ['lch', 'lab', 'lrgb', 'hsl']
 *
 * ex2 - Also You cane exclude mode chroma.scale(['yellow', 'red', 'black']); 
 *        return gradient Colors 
 * ex3 - Or chroma.scale(['yellow', 'red']);
 *        return gradient Colors 
*/
function generateChromaScale(hexColor, numberOfColors){
  return chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors);
}








// start My Pallet
const smoothColorOne = [
  { color: "#ff3399" },
  { color: "#03A9F4" },
  { color: "#FFEB3B" },
  { color: "#FF5722" },
  { color: "#1abc9c" },
  { color: "#f39c12" },
  { color: "#fafa6e" },
  { color: "#0652DD" },
  { color: "#9980FA" },
  { color: "#833471" },
  { color: "#ef9e4e" },
  { color: "#b400b4" },
  { color: "#aad28c" },
  { color: "#85d4d5" },
  { color: "#2ab682" },
  { color: "#802ab6" },
  { color: "#4fadc2" },
  { color: "#16e3bd" },
  { color: "#1671e3" },
  { color: "#e316b7" },
  { color: "#e3161f" },
];


const smoothColorTow = [
  { color: "#5758BB" },
  { color: "#6F1E51" },
  { color: "#00b894" },
  { color: "#00cec9" },
  { color: "#a10000" },
  { color: "#6c5ce7" },
  { color: "#b2bec3" },
  { color: "#182C61" },
  { color: "#FC427B" },
  { color: "#78e08f" },
  { color: "#ff9ce6" },
  { color: "#4cbb22" },
  { color: "#ff3399" },
  { color: "#85d4d5" },
  { color: "#bb57a1" },
  { color: "#39626c" },
  { color: "#6c396a" },
  { color: "#336780" },
  { color: "#fff700" },
  { color: "#ff0000" },
  { color: "#ce3c3c" },
]


/* 
const allColor = this.props.allPallet.map(pallet => pallet.colors).flat();
  let rand = Math.floor(Math.random() * allColor.length);
  const randomColor = allColor[rand];
*/



function randomColorOne(){
  const colorOneR = smoothColorOne.map(color => color.color);
  let rand = Math.floor(Math.random() * colorOneR.length);
  const colorOne = colorOneR[rand];
  return colorOne;
}

function randomColorTow(){
  const colorTowR = smoothColorTow.map(color => color.color);
  let rand = Math.floor(Math.random() * colorTowR.length);
  const colorTow = colorTowR[rand];
  return colorTow;
}

function generateRandomSmooth(colorOne, colorTow, numberOfColors){
  return chroma.scale([colorOne,colorTow]).mode('lab').colors(numberOfColors);
}


function smoothColor(numberOfColors){
  let smoothPallet =[];
  const smooth = generateRandomSmooth(randomColorOne(), randomColorTow(), numberOfColors);
  for(let i in smooth){
    smoothPallet.push({
      name: `color ${i}`,
      id : `color-${smooth[i]}`,
      hex: smooth[i],
    })
  }
  return smoothPallet;
}

export {generateConstructPallet, smoothColor};

