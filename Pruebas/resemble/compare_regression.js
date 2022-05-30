const playwright = require('playwright');
const compareImages = require("resemblejs/compareImages")
const config = require("./config.json");
const fs = require('fs');

const { viewportHeight, viewportWidth, browsers, options } = config;

async function executeTest(){
    if(browsers.length === 0){
      return;
    }
    let resultInfo = {}
    let datetime = new Date().toISOString().replace(/:/g,".");

    const myArgs = process.argv.slice(2);
    let directory_base_version = './regression1'
    let directory_base_next_version = './regression2'
    if(myArgs.length>0){
        directory_base_version = myArgs[0]
    }
    if(myArgs.length>1){
        directory_base_next_version = myArgs[1]
    }
    console.log("Base version",directory_base_version)
    console.log("Next version",directory_base_next_version)

    const before_version_paths = fs.readdirSync(directory_base_version)
    const after_version_paths = fs.readdirSync(directory_base_next_version)

    before_version_paths.sort()
    after_version_paths.sort() 
    
    console.log(`La version base tiene ${before_version_paths.length} casos`)
    console.log(`La siguiente version tiene ${after_version_paths.length} casos`)
    let reports = []
    for (let i = 0; i < before_version_paths.length; i++) {

        path_base_version = fs.readdirSync("./"+directory_base_version+"/"+before_version_paths[i])
        path_base_version.sort()
        path_next_version = fs.readdirSync("./"+directory_base_next_version+"/"+after_version_paths[i])
        path_next_version.sort()
        //dentro de los features
        console.log(`Comparando caso ${before_version_paths[i]}`)
        
        let report_list = []
        for (let k = 0; k <path_base_version.length; k++) {
          path_base_version_ = fs.readdirSync("./"+directory_base_version+"/"+before_version_paths[i]+"/"+path_base_version[k])
          path_base_version_.sort()
          path_next_version_ = fs.readdirSync("./"+directory_base_next_version+"/"+after_version_paths[i]+"/"+path_next_version[k])
          path_next_version_.sort()
          //dentro de los features
          console.log(`Comparando caso ${before_version_paths[i]}`)
          let resultInfo = []
        for (let j = 0; j <path_base_version_.length; j++) {

            file_base = fs.readFileSync("./"+directory_base_version+"/"+before_version_paths[i]+'/'+path_base_version[k]+'/'+path_base_version_[j])
            file_next = fs.readFileSync("./"+directory_base_next_version+"/"+after_version_paths[i]+'/'+path_next_version[k]+'/'+path_next_version_[j])

            const data = await compareImages(
                file_base,
                file_next,
                options
            );

            if (!fs.existsSync(`./result-regretion/compare-${datetime}/caso-${path_base_version[k]}`)){
                fs.mkdirSync(`./result-regretion/compare-${datetime}/caso-${path_next_version[k]}`, { recursive: true });
            }

            fs.writeFileSync(`./result-regretion/compare-${datetime}/caso-${path_base_version[k]}/before${j}.png`, file_base);
            fs.writeFileSync(`./result-regretion/compare-${datetime}/caso-${path_base_version[k]}/after${j}.png`, file_next);
            fs.writeFileSync(`./result-regretion/compare-${datetime}/caso-${path_base_version[k]}/compare${j}.png`, data.getBuffer());
            resultInfo[j] = {
                isSameDimensions: data.isSameDimensions,
                dimensionDifference: data.dimensionDifference,
                rawMisMatchPercentage: data.rawMisMatchPercentage,
                misMatchPercentage: data.misMatchPercentage,
                diffBounds: data.diffBounds,
                analysisTime: data.analysisTime,
                before:`./caso-${path_base_version[k]}/before${j}.png`,
                after:`./caso-${path_base_version[k]}/after${j}.png`,
                compare:`./caso-${path_base_version[k]}/compare${j}.png`,
                caseName:`${path_base_version[k]}`,
                feature: `${before_version_paths[i]}`,
                number: j+1

            } 
           
            fs.writeFileSync(`./result-regretion/compare-${datetime}/caso-${path_base_version[k]}/result.json`,JSON.stringify(resultInfo))
          }
            console.log("------->" )
            report_list[k]=resultInfo;
        }
        reports[i]=report_list;
        
       
    }
    //console.log("------------------->"+ JSON.stringify(reports) )
   
    fs.writeFileSync(`./result-regretion/compare-${datetime}/report.html`, createReports(datetime, reports));
    fs.copyFileSync('./index.css', `./result-regretion/compare-${datetime}/index.css`);
    fs.copyFileSync('./script.js', `./result-regretion/compare-${datetime}/script.js`);
    console.log('------------------------------------------------------------------------------------')
    console.log(`Execution finished. Check the report under the results folder ./result-regretion/compare-${datetime}/`)
    
    return resultInfo;  
  }


  function browser( resInfos){

    let accordion = `<div class="accordion" id="accordionPanelsStayOpenExample">`
    for(let i=0;i<resInfos.length;++i){
         
        for(let j=0;j<resInfos[i].length;++j){ 

         for(let k=0;k<resInfos[i][j].length;++k){
          info =resInfos[i][j][k]
          accordion+= `
        <div class="accordion-item misMatchPercentage_${k+"-"+i+"-"+j}">
          <h2 class="accordion-header" id="panelsStayOpen-heading${k+"-"+i+"-"+j}">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${k+"-"+i+"-"+j}" aria-expanded="true" aria-controls="panelsStayOpen-collapse${k+"-"+i+"-"+j}">
            ${info.feature}   =>    ${info.caseName} -  ${info.number}    =>   <b>mismatch : ${info.misMatchPercentage}% </b> 
              
            </button>
          </h2>
          <div id="panelsStayOpen-collapse${k+"-"+i+"-"+j}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading${i+"-"+j}">
            <div class="accordion-body">
            <div class=" browser" id="test0">
            <div class=" btitle">
                <h2>Browser</h2>
                <p>Data:  </p>
            </div>
            <div class="imgline">
              <div class="imgcontainer">
                <span class="imgname">Reference</span>
                <img class="img2" src="${info.before}" id="refImage" label="Reference">
              </div>
              <div class="imgcontainer">
                <span class="imgname">Test</span>
                <img class="img2" src="${info.after}" id="testImage" label="Test">
              </div>
            </div>
            <div class="imgline">
              <div class="imgcontainer">
                <span class="imgname">Diff</span>
                <img class="imgfull" src="${info.compare}" id="diffImage" label="Diff">
              </div>
            </di
            v>
          </div>
            </div>
          </div>
        </div>`
    }
  }
}
    accordion+="</div>";
 
    return accordion;

}

function createReports(datetime, resInfos){
 
    return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
            </head>
        <body>
            
            <h1>Report of VRT </h1>
           
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${browser(resInfos)}
            </div>
            <!-- Optional JavaScript -->
            <!-- jQuery first, then Popper.js, then Bootstrap JS -->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
            <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
            <script src="./script.js"></script>
        </body>
    </html>`
}
(async ()=>console.log(await executeTest()))();