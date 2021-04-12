const DIR = "data/";
// Get data (as a list of [x,y] pairs) from an FR file
const tsvParse = fr => d3.tsvParseRows(fr).slice(15,482)
                       .map(r=>r.map(d=>+d));

// Add a watermark to the graph.
function watermark(svg) {
    let wm = svg.append("g")
        .attr("transform", "translate("+(pad.l+W/2)+","+(pad.t+H/2-20)+")")
        .attr("opacity",0.2);
  wm.append("image")
      .attrs({x:-125, y:0, width:250, height:250, "xlink:href":"http://headphones.audiodiscourse.com/ad.png"});
   //wm.append("text")
       //.attrs({x:0, y:100, "font-size":40, "text-anchor":"middle"})
        //.text("Audio Discourse");
}

const max_channel_imbalance = 5;

const targets = [
    { type:"Neutral"   , files:["Harman In-Room","Harman 2013"] },
    { type:"Preference", files:["Antdroid","Harman 2018"] }
];

const init_phones = [ "Antdroid Target" ];
const share_url = true;
