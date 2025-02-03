const pinIt = {
    pin: "pKn873OBShoVD7iS9U1I9Q==WS8rZnDXhtDOGIC3",
    api: atob("aHR0cHM6Ly9hcGkuYXBpLW5pbmphcy5jb20="),
},
    datEle = document.getElementById("kjjf"),
    yarEle = document.getElementById("ydtih"),
    hour = document.getElementById("hour"),
    minute = document.getElementById("minute"),
    htfhb = document.getElementById("htfhb"),
    seconds = document.getElementById("seconds"),
    tcythb = document.getElementById("tcythb"),
    chemiCal = "... "

let dateObj = new Date(),
    dayNbr = dateObj.getDay() - 1,
    weekDayEach = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ],
    yearNbr = dateObj.getFullYear(),
    hourNbr = dateObj.getHours(),
    minuteNbr = dateObj.getMinutes(),
    amPm = dateObj.toLocaleTimeString(),
    secNbr = dateObj.getSeconds();
datEle.innerHTML = weekDayEach[dayNbr];
yarEle.innerHTML = "All rights reserved " + yearNbr;
hour.innerHTML = hourNbr;
minute.innerHTML = dateObj.getMinutes();
htfhb.innerHTML = amPm.slice(8);
seconds.innerHTML = secNbr;
tcythb.innerHTML = "<span id='chemica'>" + chemiCal + "</span>";
setInterval(() => {
    (dateObj = new Date()),
        (dayNbr = dateObj.getDay() - 1),
        (yearNbr = dateObj.getFullYear()),
        (hourNbr = dateObj.getHours()),
        (minuteNbr = dateObj.getMinutes()),
        (amPm = dateObj.toLocaleTimeString()),
        (secNbr = dateObj.getSeconds());
    datEle.innerHTML = weekDayEach[dayNbr];
    yarEle.innerHTML = "All rights reserved " + yearNbr;
    hour.innerHTML = hourNbr;
    minute.innerHTML = dateObj.getMinutes();
    htfhb.innerHTML = amPm.slice(8);
    seconds.innerHTML = secNbr;
}, 1000),
    (tools = document.getElementById("tools")),
    (tools_btn = document.getElementById("tools_btn")),
    (air_quality = document.getElementById("air_quality"));

function tool(str) {
    tools_btn.style.opacity = "1";
    if (str == "tool1") {
        tools.innerHTML = `<div class="tool">
                   <div class="content" id="bmi">
                    <form id="form">
                     <h1>Your Body Mass Index</h1>
                     <div id="input_tag">
                     <input id="height" type="text" placeholder=""/>
                     <div id="border_line"></div>
                     <input type="text" placeholder="weight in kg" id="weight" />
                     </div>
                     <div id="btn_tag">
                     <button id="bmi_btn">BMI</button>
                     <button id="unit_bmi">unit</button>
                     </div>
                     <div id="formResult">&nbsp;</div>
                    </form>
                    <section id="section_content">
                     <div class="bmi">
                       <span id="bmi_span"></span>
                       <span id="bmi_result">&nbsp;</span>
                     </div>
                     <div id="desc">
                     </div>
                    </section>
                    </div>
                    </div>`;

        const form = document.getElementById("form"),
            height = document.getElementById("height"),
            weight = document.getElementById("weight"),
            bmi_btn = document.getElementById("bmi_btn"),
            unit_bmi = document.getElementById("unit_bmi"),
            formResult = document.getElementById("formResult"),
            bmi_span = document.getElementById("bmi_span"),
            bmi_result = document.getElementById("bmi_result"),
            desc = document.getElementById("desc")
        height.placeholder = "height meter*"
        weight.placeholder = "weight kg*"
        let typeIt = false;

        unit_bmi.addEventListener("click", function () {
            if (typeIt == false) {
                typeIt = true;
                height.placeholder = "height inches*"
                weight.placeholder = "weight lb*"
            } else if (typeIt == true) {
                typeIt = false;
                height.placeholder = "height meter*"
                weight.placeholder = "weight kg*"
            }
            bmi_result.innerText = ""
            weight.value = ""
            height.value = ""
        })

        form.addEventListener("submit", function (eve) {
            eve.preventDefault()
            if (!height.value) {
                formResult.innerText = "Type value*"
                setTimeout(() => formResult.innerText = "", 3000)
                bmi_span.innerText = ""
                desc.innerText = ""
                return 0;
            }
            if (!weight.value) {
                formResult.innerText = "Type value*"
                setTimeout(() => formResult.innerText = "", 3000)
                bmi_span.innerText = ""
                desc.innerText = ""
                return 0;
            }


            if (typeIt == false) {
                const bmiResultMeterKg = weight.value / (height.value * height.value)
                const result = bmiResultMeterKg.toFixed()
                bmi_result.innerText = result
                bmi_span.innerText = "BMI"
                desc.innerText = `BMI stands for Body Mass Index is a standard to measure the healthy body weight according to your body weight and height. Measurement of 18.5 to 25 is considered normal, less then 18.5 concludes thin, more then 25 measurement indicate obesity. Your BMI measurement ${result} shows you have symptoms of ${result > 25 ? "thickness" : result < 18.5 ? "thinness" : result >= 18.5 ? "normal body weight" : result <= 25 ? "normal" : ""}.`
                formResult.innerText = ""
            } else if (typeIt == true) {
                let multiplyHeight = height.value * height.value
                let divideIt = weight.value / multiplyHeight
                let bmiResultInchesLbs = 703 * divideIt
                const result = bmiResultInchesLbs.toFixed()
                bmi_result.innerText = result
                bmi_span.innerText = "BMI"
                desc.innerText = `BMI stands for Body Mass Index is a standard to measure the healthy body weight according to your body weight and height. Measurement of 18.5 to 25 is considered normal, less then 18.5 concludes thin, more then 25 measurement indicate obesity. Your BMI measurement ${result} shows you have symptoms of ${result > 25 ? "thickness" : result < 18.5 ? "thinness" : result >= 18.5 ? "normal body weight" : result <= 25 ? "normal" : ""}.`
                formResult.innerText = ""
            }
        })
    } else if (str == "tool2") {
        tools.innerHTML = `<div class="tool">
                   <div class="content" id="air_quality">
                    <form id="form">
                     <h1>Your Air Quality</h1>
                     <input id="formInput" required  placeholder="Your city"
type="text"/>
                     <button id="formBtn">Air Quality</button>
                     <div id="formResult">&nbsp;</div>
                    </form>
                    <section>
                     <div id="aqi">
                      <span id="aqi_span">&nbsp</span>
                      <span id="aqi_desc">&nbsp</span>
                     </div>
                     <div id="desc">
                      <h2><span id="city_query"></span> <p
id="air_quality_index"></p></h2>
                      <p id="aqi_desc_statement"></p>
                     </div>
                    </section>
                    </div>
        </div>`;

        const form = document.getElementById("form");
        const formInput = document.getElementById("formInput");
        const formBtn = document.getElementById("formBtn");
        const formResult = document.getElementById("formResult");

        form.addEventListener("submit", async function (event) {
            event.preventDefault();
            const cityQuery = formInput.value.toLowerCase();
            const formResult = document.getElementById("formResult");
            const aqi_span = document.getElementById("aqi_span");
            const aqi_desc = document.getElementById("aqi_desc");
            const city_query = document.getElementById("city_query");
            const air_quality_index =
                document.getElementById("air_quality_index");
            const aqi_desc_statement =
                document.getElementById("aqi_desc_statement");
            formResult.innerText = "It is pending...";

            await fetch(pinIt.api + "/v1/airquality?city=" + cityQuery, {
                method: "GET",
                headers: { "X-Api-Key": pinIt.pin },
            })
                .then((result) => result.json())
                .then(function (result) {
                    if (!result.overall_aqi || result.error) {
                        formResult.innerText = "Result not available";
                        return 0;
                    }
                    aqi_desc_statement.innerText = "";
                    formResult.innerText = "";
                    aqi_span.innerText =
                        result.overall_aqi == 500
                            ? `${result.overall_aqi} or above`
                            : result.overall_aqi;
                    aqi_desc.innerText = " AQI";
                    city_query.innerText =
                        cityQuery[0].toUpperCase() + cityQuery.slice(1);
                    air_quality_index.innerText = "(air quality Index)";
                    aqi_desc_statement.innerText = `AQI means Air Quality Index.
                    It is used for the quality of Air. More then 100 AQI
            defines poor quality, less show good Air Quality`;
                    formInput.value = "";
                });
        });
    } else if (str == "tool3") {
        tools.innerHTML = `<div class="tool">
                   <div class="content" id="pollution">
                    <form id="form">
                        <h1>Your pollution</h1>
                        <input id="formInput" required placeholder="Your city"
type="text"/>
                        <button id="formBtn">Pollution</button>
                        <div id="formResult">&nbsp;</div>
                    </form>
                   <section>
                    <div id="data">
                      <span>Harmful material present in our natural environment
is called <b>pollution</b>. </span><span>This tool shows value
                      of harmful gases present in the environment. Pollution can
be present in many form, for example solid, liquid, or gas studies says.
Reaction of harmful material causes environment to get polluted. Harmful gases
increases in the environment, concludes how polluted specific environment.
</span><span id="not_search_query">Enter your city tool can provide information
about how much pollution is present in your environment. </span><span
id="search_query"><h2 class="city_pollution"></h2><span> data is present. Data
of gases may exist. According to the data overall aqi is <span
id="aqi_pollution"></span><span>. AQI means Air Quality Index. It is used for
the quality of Air. More then 100 AQI defines poor quality, lesser then 100 show
good Air Quality. Below is the concentration of pollutant gases data, it
indicates pollution by providing calculation of pollutant material level in the
air.
                      <ul id="pollutant_pollution">
                      <li>
                       <b>CO</b> stands for carbon monoxide. The concentration
of carbon monoxide in <span class="city_pollution"></span> is <span
id="co_pollution"></span><span>ppm. </span>According to studies
0.22363999999999998ppm for over 8 hours, level is considered just safe for
carbon monoxide. More then 0.2ppm for many hours probably worst research say.
                      </li>
                      <li>
                       <b>PM10</b> are small inhalable particles. With diameter
of 10 micrometers or less, the concentration of PM10 in <span
class="city_pollution"></span> is <span id="pmt10_pollution"></span><span>ppm.
</span>According to studies less then 0.04 ppm is good, from 0.04 to 0.08ppm is
concluded fair, more then 0.08ppm declares polluted environment.
                      </li>
                      <li>
                       <b>SO2</b> stands for sulfur dioxide, it can cause
dangerous impact. The concentration of SO2 in <span
class="city_pollution"></span> is <span id="so2_pollution"></span><span>ppm.
Sulphur diaoxide in a environment, is said 0.12ppm for 24 hours is guideline by
experts. More then 0.35ppm need to not exceed, it is study, links provided down
to source directory.</span>
                      </li>
                      <li>
                       <b>PM2.5</b> stands for particluar matter2.5 are small
polluted inhalable hazard particles of 2.5 micrometers. The concentration of
PM2.5 in <span class="city_pollution"></span> is <span
id="pm2point5_pollution"></span><span>ppm. </span>According to studies less then
0.04ppm is good, less then 0.012ppm for 24 hours is concluded good, more then
0.012ppm for 24 hours is concluded fair, more then 0.05ppm declares polluted
environment.
                      </li>
                      <li>
                       <b>O3</b> stands for Ozone, is a natural or unatural
developed reactive gas, found on earth upper and lower atmosphere. The
concentration of Ozone over <span class="city_pollution"></span> is <span
id="o3_pollution"></span><span>ppm. </span>At ground level Ozone is considered
hazard, upper atmosphere Ozone is good as it saves from ultraviolet radiation.
                      </li>
                      <li>
                       <b>NO2</b> stands for Nitrogen Dioxide. The concentration
of NO2 in <span class="city_pollution"></span> is <span
id="nitrogen_dioxide_pollution"></span><span>ppm. </span>According to studies
0.1ppm as a 24 hours average, level is considered standard. It is said 0.12ppm
or more is toxic to plants.
                      </li>
                         </ul>
                        </span>
                       </span>
                      </span>
                     </div>
                     <div id="source">
                     <div>
                       <a
href="https://www.co2meter.com/blogs/news/carbon-monoxide-levels-chart">https:
// www.co2meter.com/blogs/news/carbon-monoxide-levels-chart
</a>
     </div>
     <div>
      <a
href="https://www.epa.vic.gov.au/for-community/environmental-information/air-
quality/pm10-particles-in-the-air
">https://www.epa.vic.gov.au/for-community/environmental-information/air-quality
/pm10-particles-in-the-air
</a>
     </div>
     <div>
      <a
href="https://environment.govt.nz/facts-and-science/air/air-pollutants/sulphur-
dioxide-and-effects-on-health/
">https://environment.govt.nz/facts-and-science/air/air-pollutants/sulphur-
dioxide-and-effects-on-health/
</a>
     </div>
     <div>
      <a
href="https://www.epa.vic.gov.au/for-community/environmental-information/air-
quality/pm25-particles-in-the-air
">https://www.epa.vic.gov.au/for-community/environmental-information/air-quality
/pm25-particles-in-the-air
</a>
     </div>
     <div>
      <a
href="https://www.epa.gov/ground-level-ozone-pollution/ground-level-ozone-basics
">https://www.epa.gov/ground-level-ozone-pollution/ground-level-ozone-basics
</a>
     </div>
     <div>
      <a
href="https://environment.govt.nz/facts-and-science/air/air-pollutants/nitrogen-
dioxide-effects-health/">https://environment.govt.nz/facts-and-science/air/air-
pollutants/nitrogen-dioxide-effects-health/</a>
     </div>
   </div>
                    </section>
                   </div>
        </div>`;

        const form = document.getElementById("form");
        const formInput = document.getElementById("formInput");
        const formBtn = document.getElementById("formBtn");
        const formResult = document.getElementById("formResult");
        const search_query = document.getElementById("search_query");
        const city_pollution = document.querySelectorAll(".city_pollution");
        const aqi_pollution = document.getElementById("aqi_pollution");
        const co_pollution = document.getElementById("co_pollution");
        const pmt10_pollution = document.getElementById("pmt10_pollution");
        const so2_pollution = document.getElementById("so2_pollution");
        const pm2point5_pollution = document.getElementById(
            "pm2point5_pollution",
        );
        const o3_pollution = document.getElementById("o3_pollution");
        const source = document.getElementById("source");

        form.addEventListener("submit", async function (event) {
            event.preventDefault();
            const cityQuery = formInput.value.toLowerCase();
            const formResult = document.getElementById("formResult");
            formResult.innerText = "It is pending...";

            await fetch(pinIt.api + "/v1/airquality?city=" + cityQuery, {
                method: "GET",
                headers: { "X-Api-Key": pinIt.pin },
            })
                .then((result) => result.json())
                .then(function (result) {
                    if (!result.overall_aqi || result.error) {
                        search_query.style.opacity = 0;
                        search_query.style.width = "1px";
                        formResult.innerText = "Result not available";
                        city_pollution.forEach(function (e) {
                            e.innerText = "";
                        });
                        aqi_pollution.innerText = "";
                        co_pollution.innerText = "";
                        pmt10_pollution.innerText = "";
                        so2_pollution.innerText = "";
                        pm2point5_pollution.innerText = "";
                        o3_pollution.innerText = "";
                        nitrogen_dioxide_pollution.innerText = "";
                        source.style.display = "none";
                        return 0;
                    }
                    const { CO, PM10, SO2, NO2, O3, ...PMtwopointfive } = result;
                    search_query.style.opacity = 1;
                    search_query.style.height = "max-content";
                    search_query.style.width = "100%";
                    search_query.style.display = "grid";
                    formResult.innerHTML = "<div>&nbsp;</div>";
                    city_pollution.forEach(function (e) {
                        e.innerText = cityQuery[0].toUpperCase() + cityQuery.slice(1);
                    });
                    aqi_pollution.innerText = result.overall_aqi;
                    co_pollution.innerText = CO.concentration / 1000;
                    pmt10_pollution.innerText = PM10.concentration / 1000;
                    so2_pollution.innerText = SO2.concentration / 1000;
                    nitrogen_dioxide_pollution.innerText = NO2.concentration / 1000;
                    o3_pollution.innerText = O3.concentration / 1000;
                    pm2point5_pollution.innerText =
                        PMtwopointfive["PM2.5"].concentration / 1000;
                    source.style.display = "flex";
                });
        });
    }
}

function abc() {
    tools_btn.style.opacity = "0";
    tools.innerHTML = `<h1>Medical Tools</h1>
                <div class="title">
                    <strong onclick="tool('tool1')">Your Body Mass Index
                    (BMI</strong>
                </div>
                <div class="title">
                    <strong onclick="tool('tool2')">Your Air Quality
                    (AIQ)</strong>
                </div>
                <div class="title">
                    <strong onclick="tool('tool3')">Your Pollution</strong>
      </div>`;
}
//
const str = [
    60, 100, 105, 118, 62, 73, 116, 32, 105, 115, 32, 103, 114, 101, 97, 116,
    32, 116, 111, 32, 104, 97, 118, 101, 32, 121, 111, 117, 32, 111, 110, 32,
    118, 105, 115, 105, 116, 104, 101, 97, 114, 116, 32, 119, 101, 98, 115,
    105, 116, 101, 46, 32, 84, 104, 105, 115, 32, 119, 101, 98, 115, 105, 116,
    101, 32, 104, 97, 115, 32, 108, 105, 110, 107, 115, 32, 116, 111, 32, 116,
    111, 111, 108, 115, 44, 32, 97, 114, 101, 32, 112, 114, 111, 98, 97, 98,
    108, 121, 32, 98, 101, 110, 101, 102, 105, 99, 105, 97, 108, 32, 102, 111,
    114, 32, 100, 97, 105, 108, 121, 32, 99, 105, 114, 99, 117, 109, 115, 116,
    97, 110, 99, 101, 115, 44, 32, 116, 104, 105, 115, 32, 119, 101, 98, 115,
    105, 116, 101, 32, 100, 111, 101, 115, 110, 111, 116, 32, 112, 114, 111,
    118, 105, 100, 101, 32, 97, 110, 121, 32, 116, 114, 101, 97, 116, 109,
    101, 110, 116, 32, 98, 117, 116, 32, 105, 115, 32, 99, 111, 110, 116, 114,
    105, 98, 117, 116, 105, 111, 110, 32, 102, 111, 114, 32, 109, 101, 100,
    105, 99, 97, 108, 32, 105, 110, 102, 111, 114, 109, 97, 116, 105, 111,
    110, 46, 60, 47, 100, 105, 118, 62, 60, 100, 105, 118, 62, 84, 111, 111,
    108, 32, 97, 114, 101, 32, 112, 114, 111, 118, 105, 100, 101, 100, 32, 97,
    115, 32, 97, 110, 32, 99, 111, 110, 116, 114, 105, 98, 117, 116, 105, 111,
    110, 44, 32, 116, 104, 101, 115, 101, 32, 109, 97, 121, 32, 117, 115, 101,
    32, 116, 104, 105, 114, 100, 32, 112, 97, 114, 116, 121, 32, 65, 80, 73,
    46, 32, 84, 104, 105, 114, 100, 32, 112, 97, 114, 116, 121, 32, 65, 80,
    73, 32, 97, 114, 101, 32, 119, 105, 116, 104, 32, 116, 104, 101, 114, 101,
    32, 114, 117, 108, 101, 115, 46, 60, 47, 100, 105, 118, 62, 60, 100, 105,
    118, 62, 87, 101, 98, 115, 105, 116, 101, 32, 99, 97, 110, 32, 117, 115,
    101, 32, 73, 110, 116, 101, 114, 110, 101, 116, 32, 67, 111, 111, 107,
    105, 101, 115, 46, 32, 84, 104, 101, 115, 101, 32, 67, 111, 111, 107, 105,
    101, 115, 32, 97, 114, 101, 32, 117, 115, 101, 100, 32, 116, 111, 32, 112,
    114, 111, 118, 105, 100, 101, 32, 118, 105, 101, 119, 101, 114, 32, 104,
    101, 108, 112, 46, 32, 65, 115, 32, 100, 101, 118, 101, 108, 111, 112,
    101, 114, 115, 32, 97, 114, 101, 32, 100, 111, 105, 110, 103, 32, 119,
    111, 114, 107, 32, 116, 111, 32, 112, 114, 111, 118, 105, 100, 101, 32,
    101, 97, 114, 116, 104, 32, 116, 104, 101, 32, 98, 101, 115, 116, 32, 116,
    104, 101, 121, 32, 99, 97, 110, 44, 32, 116, 111, 32, 99, 114, 101, 97,
    116, 101, 32, 115, 111, 102, 116, 119, 97, 114, 101, 32, 103, 101, 116,
    116, 105, 110, 103, 32, 98, 108, 101, 115, 115, 32, 102, 114, 111, 109,
    32, 112, 101, 111, 112, 108, 101, 44, 32, 112, 114, 111, 118, 105, 100,
    105, 110, 103, 32, 108, 97, 114, 103, 101, 32, 110, 117, 109, 98, 101,
    114, 32, 97, 115, 32, 99, 111, 110, 116, 114, 105, 98, 117, 116, 105, 111,
    110, 32, 116, 104, 97, 110, 107, 32, 121, 111, 117,
];
document.getElementById("h1").innerText = "About";
document.getElementById("section_data").innerHTML = String.fromCharCode(
    ...str,
);
document.getElementById("vh").innerHTML =
    `<div>All Rights reserved ${new
        Date().getFullYear()}</div><div>visitheart.com</div>`;
document
    .getElementById("about_toggle")
    .addEventListener("click", function () {
        document.getElementById("about").style.display = "flex";
        document.getElementById("about").style.opacity = ".2";
        setTimeout(function () {
            document.getElementById("about").style.opacity = ".8";
        }, 1000);
        setTimeout(function () {
            document.getElementById("about").style.opacity = "1";
        }, 2000);
    });
document
    .getElementById("close_component")
    .addEventListener("click", function () {
        document.getElementById("about").style.opacity = ".8";
        setTimeout(function () {
            document.getElementById("about").style.opacity = ".2";
        }, 1000);
        setTimeout(function () {
            document.getElementById("about").style.opacity = "0";
            document.getElementById("about").style.display = "none";
        }, 2000);
    });
