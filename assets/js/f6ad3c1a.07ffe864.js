"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[597],{5058:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return h},toc:function(){return p}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),s=n(3066),i=n(2302),c=["components"],l={slug:"weather-widget",title:"React Weather Widget",authors:["jason"]},u=void 0,h={permalink:"/portfolio/blog/weather-widget",source:"@site/blog/2022-06-22-weather-widget.mdx",title:"React Weather Widget",description:"ShowWeather React Component",date:"2022-06-22T00:00:00.000Z",formattedDate:"June 22, 2022",tags:[],readingTime:.585,truncated:!1,authors:[{name:"Jason Mortensen",title:"Technical Writer",url:"https://github.com/ingrey1/portfolio",imageURL:"https://media-exp2.licdn.com/dms/image/C4E03AQFZbme25h0hng/profile-displayphoto-shrink_400_400/0/1633321615286?e=1660780800&v=beta&t=5LlzlM6G6kcaJw9cccQjclGOo3sgt_WqPCC1YroJDTo",key:"jason"}],frontMatter:{slug:"weather-widget",title:"React Weather Widget",authors:["jason"]},nextItem:{title:"Planning A Feedback Component",permalink:"/portfolio/blog/planning-feedback-component"}},d={authorsImageUrls:[void 0]},p=[{value:"ShowWeather React Component",id:"showweather-react-component",level:3}],m={toc:p};function f(e){var t=e.components,n=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"showweather-react-component"},"ShowWeather React Component"),(0,r.kt)(s.Z,{language:"jsx",showLines:!0,mdxType:"CodeBlock"},i.Z),(0,r.kt)("p",null,"I made this component to demonstrate the feasibility of interacting with a live RESTful API to retrieve data and display it on a site generated via Docusaurus. Now that the ShowWeather component is complete, it can be dropped into any React page or .MDX document to display the weather data for the user. This component-based re-usability is part of what has made React such a popular Javascript framework. If you'd like to check out what using this React component looks like in the context of this Docusaurus portfolio site, review the code for the ",(0,r.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/ingrey1/portfolio/main/src/pages/about.mdx"},"About Me")," ",(0,r.kt)("a",{parentName:"p",href:"https://mdxjs.com/docs/what-is-mdx/"},"MDX")," page."))}f.isMDXComponent=!0},2302:function(e,t){t.Z='import React, { useEffect, useState } from "react";\nimport CodeBlock from "@theme/CodeBlock";\nimport useDocusaurusContext from "@docusaurus/useDocusaurusContext";\nimport styles from "./styles.module.css";\n\nconst BASE_WEATHER_API_URL = "https://api.openweathermap.org/data/3.0/onecall";\n\nconst SIMI_VALLEY_LOC = { lat: 34.2694, lon: -118.7815 };\n\nexport default function ShowWeather() {\n  const {\n    siteConfig: {\n      customFields: { WEATHER_API_KEY },\n    },\n  } = useDocusaurusContext();\n\n  const [weatherData, setWeatherData] = useState(null);\n\n  const generateWeatherQueryParamString = (lat, lon, exclude = []) => {\n    return `?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${WEATHER_API_KEY}`;\n  };\n\n  const getWeatherUrl = (lat, lon, exclude = []) => {\n    return (\n      BASE_WEATHER_API_URL + generateWeatherQueryParamString(lat, lon, exclude)\n    );\n  };\n\n  const handleWeather = (\n    lat,\n    lon,\n    exclude = [\n      "lat",\n      "lon",\n      "timezone",\n      "timezone_offset",\n      "minutely",\n      "hourly",\n      "daily",\n    ]\n  ) => {\n    try {\n      window\n        .fetch(getWeatherUrl(lat, lon, exclude))\n        .then((response) => response.json())\n        .then((data) => setWeatherData(JSON.stringify(data.current, null, 2)));\n    } catch (error) {\n      console.log(`Error fetching weather data:\\n\\n ${error}`);\n    }\n  };\n\n  useEffect(() => {\n    if (!weatherData && window) {\n      handleWeather(SIMI_VALLEY_LOC.lat, SIMI_VALLEY_LOC.lon);\n    }\n  }, []);\n\n  return (\n    <div className={styles.weatherWidget}>\n      <CodeBlock language="json">{weatherData}</CodeBlock>\n    </div>\n  );\n}\n'}}]);