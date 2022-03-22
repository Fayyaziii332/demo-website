import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import services from './services';

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A Blog website using tailwindcss." />
        <title>Blog Website</title>
        {/* <link href="/dist/output.css" rel="stylesheet"> */}
      </Head>
      <header className="flex items-center justify-between flex-wrap px-12 py-6 mx-auto w-full z-10 top-0 border-b-2 border-gray-100">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a className="text-white no-underline hover:text-white hover:no-underline" href="#" aria-label="logo">
            <svg color="#4F46E5" width="125" viewBox="0 0 1500 300" fill="#4F46E5">
              <path d="M1448.249,86.424 C1447.658,89.963 1445.595,92.027 1442.645,92.027 C1442.352,92.027 1442.052,92.027 1441.760,92.027 L1441.465,92.027 C1433.500,90.848 1411.674,88.487 1394.863,88.487 C1385.721,88.487 1372.152,89.668 1372.152,102.056 C1372.152,106.185 1375.105,110.018 1381.003,114.147 L1415.508,137.746 C1433.207,149.838 1437.338,161.928 1437.338,174.908 C1437.338,211.775 1407.253,227.406 1372.152,227.406 C1362.421,227.406 1337.055,226.519 1319.063,221.506 C1316.115,220.621 1314.643,218.852 1314.643,216.195 C1314.643,215.906 1314.643,215.609 1314.643,215.310 C1314.643,215.021 1314.643,215.021 1314.643,214.725 L1317.883,197.029 C1318.477,194.078 1321.127,192.307 1324.080,192.307 C1324.372,192.307 1324.668,192.307 1324.960,192.307 C1338.824,194.078 1363.306,195.553 1372.152,195.553 C1386.607,195.553 1397.518,192.898 1397.518,179.041 C1397.518,174.316 1394.863,169.891 1387.785,164.879 L1351.805,140.103 C1340.594,132.435 1332.633,119.164 1332.633,105.007 C1332.633,66.072 1366.548,56.633 1394.863,56.633 C1412.560,56.633 1430.850,58.698 1447.070,62.827 C1450.018,63.713 1451.197,65.482 1451.197,68.135 C1451.197,68.432 1451.197,68.727 1451.197,69.021 C1451.197,69.316 1451.197,69.316 1451.197,69.613 L1448.249,86.424 ZM1271.891,219.738 C1252.717,224.459 1230.303,227.406 1211.423,227.406 C1170.428,227.406 1152.436,202.043 1152.436,169.602 C1152.436,164.291 1153.029,158.978 1153.910,153.375 L1157.750,130.666 C1166.593,77.281 1194.025,56.633 1241.510,56.633 C1248.590,56.633 1258.616,57.223 1269.235,58.698 L1278.675,6.494 C1279.262,3.249 1282.209,0.594 1285.456,0.594 L1312.592,0.594 C1315.541,0.594 1317.605,2.660 1317.605,5.609 C1317.605,5.903 1317.605,6.197 1317.605,6.494 L1281.330,211.775 C1280.445,216.195 1278.967,217.969 1271.891,219.738 ZM1235.905,88.487 C1210.539,88.487 1201.399,102.056 1196.681,130.666 L1192.845,153.375 C1191.664,160.451 1191.075,166.355 1191.075,171.660 C1191.075,187.881 1197.859,195.553 1217.027,195.553 C1227.649,195.553 1239.739,194.668 1245.640,193.492 L1263.631,90.553 C1255.665,89.373 1242.986,88.487 1235.905,88.487 ZM1042.737,227.406 L1040.969,227.406 C1024.449,227.406 984.926,220.326 984.926,172.252 C984.926,166.648 985.518,160.164 986.698,153.375 L1002.331,64.894 C1002.919,61.648 1005.573,58.698 1008.821,58.698 L1036.544,58.698 C1039.490,58.698 1041.264,61.060 1041.264,63.713 C1041.264,64.302 1041.264,64.598 1041.264,64.894 L1025.042,156.029 C1023.862,162.225 1023.564,167.533 1023.564,171.959 C1023.564,188.768 1031.233,193.785 1046.866,193.785 L1048.637,193.785 C1066.334,193.785 1078.129,186.410 1083.441,156.029 L1099.662,64.894 C1100.249,61.648 1102.903,58.698 1106.150,58.698 L1133.875,58.698 C1136.822,58.698 1138.594,61.060 1138.594,63.713 C1138.594,64.302 1138.594,64.598 1138.594,64.894 L1122.080,158.978 C1110.869,223.277 1065.743,227.406 1042.737,227.406 ZM954.564,153.969 C952.143,166.844 948.387,177.998 943.368,187.516 L917.904,162.144 L917.660,162.371 L917.578,127.305 L880.695,117.396 L876.803,121.350 L896.376,140.934 L877.226,160.055 L857.655,140.447 L853.724,144.389 L863.633,181.256 L899.664,181.377 L927.130,208.725 C913.243,221.133 894.668,227.406 871.390,227.406 C831.279,227.406 812.401,199.090 812.401,168.119 C812.401,163.404 812.696,158.682 813.582,153.969 L818.008,130.078 C827.444,78.755 855.168,56.633 901.476,56.633 C941.884,56.633 960.465,83.769 960.465,114.737 C960.465,119.754 959.874,125.062 958.990,130.078 L954.564,153.969 ZM760.798,225.049 L733.369,225.049 C730.420,225.049 728.648,222.689 728.648,220.035 C728.648,219.443 728.648,219.150 728.648,218.852 L766.108,6.494 C766.696,3.249 769.649,0.594 772.891,0.594 L800.322,0.594 C803.270,0.594 805.039,2.660 805.039,5.312 C805.039,5.903 805.039,6.197 805.039,6.494 L767.582,218.852 C766.994,222.102 764.044,225.049 760.798,225.049 ZM719.222,87.309 C718.635,90.258 715.981,91.732 713.325,91.732 C713.031,91.732 713.031,91.732 712.733,91.732 L712.439,91.732 C703.001,90.553 693.857,89.668 674.687,89.668 C660.827,89.668 645.194,97.631 639.589,128.307 L634.578,155.738 C633.394,161.340 633.100,166.355 633.100,170.480 C633.100,190.537 644.015,194.375 656.104,194.375 C675.280,194.375 684.125,193.492 694.743,192.307 L695.040,192.307 C695.334,192.307 695.334,192.307 695.628,192.307 C697.989,192.307 700.053,193.492 700.053,195.848 C700.053,196.144 700.053,196.144 700.053,196.435 L700.053,196.732 L696.512,215.906 C695.628,220.621 694.448,222.391 689.142,223.574 C682.060,225.346 668.495,227.406 650.505,227.406 C616.879,227.406 594.170,204.400 594.170,170.775 C594.170,166.060 594.760,161.045 595.641,155.738 L600.658,128.307 C610.981,72.562 642.246,56.633 680.585,56.633 C698.580,56.633 711.261,58.698 717.750,60.468 C721.584,61.353 723.056,62.534 723.056,65.482 C723.056,66.072 723.056,67.253 722.763,68.135 L719.222,87.309 ZM552.304,218.852 C551.716,222.102 548.766,225.049 545.519,225.049 L517.798,225.049 C514.845,225.049 513.373,222.689 513.373,220.035 C513.373,219.738 513.373,219.150 513.373,218.852 L531.363,116.805 C531.955,112.970 532.542,109.428 532.542,105.890 C532.542,96.451 528.708,89.078 514.257,89.078 L497.739,89.078 C480.631,89.078 476.503,96.451 472.963,116.805 L454.973,218.852 C454.385,222.102 451.432,225.049 448.189,225.049 L420.462,225.049 C417.518,225.049 416.040,222.689 416.040,220.035 C416.040,219.738 416.040,219.150 416.040,218.852 L434.032,116.805 C441.994,71.973 458.810,56.633 503.640,56.633 L518.976,56.633 C552.602,56.633 570.887,78.166 570.887,106.774 C570.887,110.902 570.593,115.328 569.707,119.754 L552.304,218.852 ZM380.372,211.775 C379.486,216.195 378.010,217.969 370.933,219.738 C351.764,224.459 329.346,227.406 310.469,227.406 C270.359,227.406 251.483,203.518 251.483,170.189 C251.483,164.879 252.071,159.275 252.956,153.377 L256.790,130.666 C265.343,79.641 293.066,56.633 340.555,56.633 C359.431,56.633 380.962,59.583 398.362,64.302 C403.672,65.778 405.149,67.253 405.149,69.906 C405.149,70.497 405.149,71.381 404.852,72.266 L380.372,211.775 ZM334.950,88.487 C309.585,88.487 300.147,105.007 295.721,130.666 L291.891,153.377 C290.707,159.863 290.120,165.471 290.120,170.480 C290.120,186.707 296.903,195.553 316.074,195.553 C326.691,195.553 338.784,194.668 344.683,193.492 L362.674,90.553 C357.364,89.373 345.567,88.487 334.950,88.487 ZM140.605,227.406 C124.682,227.406 110.818,225.635 99.019,219.738 C84.862,225.635 72.767,227.406 56.845,227.406 C28.530,227.406 0.803,212.660 0.803,170.480 C0.803,163.992 1.394,157.211 2.870,149.541 L17.909,64.302 C18.499,61.060 21.747,58.698 24.691,58.698 L51.235,58.698 C54.189,58.698 56.251,60.764 56.251,63.417 C56.251,63.713 56.251,64.008 56.251,64.302 L41.210,149.541 C40.032,156.914 39.439,162.814 39.439,167.830 C39.439,191.422 53.007,192.307 71.588,192.307 L84.274,192.307 L106.690,64.598 C107.278,61.353 110.227,58.698 113.474,58.698 L140.904,58.698 C143.852,58.698 145.916,60.764 145.916,63.713 C145.916,64.008 145.916,64.302 145.916,64.598 L123.499,192.307 L136.180,192.307 C159.188,192.307 173.933,191.129 181.312,149.541 L196.349,64.302 C196.940,61.353 199.889,58.698 203.133,58.698 L229.676,58.698 C232.630,58.698 234.694,60.764 234.694,63.417 C234.694,63.713 234.694,64.008 234.694,64.302 L219.651,149.541 C208.740,211.775 180.128,227.406 140.605,227.406 Z"></path>
            </svg>
          </a>
        </div>
        <div className="block lg:hidden">
          <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 ">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <nav className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Link href="/">
                <a className="inline-block text-gray-500 hover:text-gray-900 no-underline px-4 py-2" >Home</a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/services" >
                <a className="inline-block text-gray-500 hover:text-gray-900 no-underline px-4 py-2">Services</a>
              </Link>
            </li>
            <li>
              <Link href="/contact" >
              <a className="inline-block text-gray-500 hover:text-gray-900 no-underline px-4 py-2">ContactUs</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a
                  className="ml-4 whitespace-nowrap flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-900">
                  Sign up 
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 pt-24 pb-12 sm:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-4xl mb-4 font-medium text-indigo-600">
                Multi-Cloud Migrations and
                        <br className="hidden lg:inline-block" /> Disaster Recovery
                    </h1>
              <p className="mb-8 leading-relaxed">Re-Imagine Multi-Cloud Migrations, Disaster Recovery , Visualization
                        <br className="hidden lg:inline-block" /> and Compliance delivered as a Service .</p>
              <div className="flex justify-center">
                <button className="flex-row flex-wrap sm:flex-col text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-900 rounded text-lg">
                  Demo
                        </button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Trial
                        </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image className="object-cover object-center rounded" alt="hero image" src="/hero.webp" width="430" height="350" />
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="text-3xl font-medium title-font mb-4 text-indigo-600">OUR TEAM</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We are a team of cloud enthusiasts headquartered
              in Silicon Valley with global presence. We are excited to introduce a holistic & re-imagined
                        approach for multi-cloud migrations as a service.</p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <Image alt="Faiz" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src="/faiz.webp" width="380" height="250" />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">Faiz Khan</h2>
                    <h3 className="text-gray-500 mb-3">CEO & Founde</h3>
                    <p className="mb-4">Faiz was an executive at Cisco & played multiple leadership roles.</p>
                    <span className="inline-flex">
                      <a className="text-gray-700" href="https://www.facebbok.com/" target="_blank"   rel="noreferrer" aria-label="Facebook">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          className="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-700" href="https://www.twitter.com/" target="_blank"   rel="noreferrer" aria-label="Twitter">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          className="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500" href="https://www.linkedin.com/" target="_blank"   rel="noreferrer" aria-label="Linkedin">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          className="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <Image alt="Zayad" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src="/zayad.webp" width="380" height="250" />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">Zayad Malik</h2>
                    <h3 className="text-gray-500 mb-3">Marketing Head</h3>
                    <p className="mb-4">Zayad is Marketing head and Business Development.
                                    .</p>
                    <span className="inline-flex">
                      <a className="text-gray-700" href="https://www.facebbok.com/" target="_blank"   rel="noreferrer" aria-label="Facebook">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          className="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-700" href="https://www.twitter.com/" target="_blank"   rel="noreferrer" aria-label="Twitter">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          className="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500" href="https://www.linkedin.com/" target="_blank"   rel="noreferrer" aria-label="Linkedin">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          className="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <Image alt="Faizullah"
                    className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src="/syed.webp" width="380" height="250" />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">Syed Faizullah</h2>
                    <h3 className="text-gray-500 mb-3">Director Networking</h3>
                    <p className="mb-4">Syed Faizullah is Director Network Solutions Engineering
                                    .</p>
                    <span className="inline-flex">
                      <a className="text-gray-700" href="https://www.facebbok.com/" target="_blank"   rel="noreferrer" aria-label="Facebook">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          className="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-700" href="https://www.twitter.com/" target="_blank"   rel="noreferrer" aria-label="Twitter">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          className="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500" href="https://www.linkedin.com/" target="_blank"   rel="noreferrer" aria-label="Linkedin">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          className="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/4 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <Image alt="Maimoona" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src="/maimoona.webp" width="380" height="250" />
                  <div className="w-full">
                    <h2 className="title-font font-medium text-lg text-gray-900">Maimoona Iqbal</h2>
                    <h3 className="text-gray-500 mb-3">Engineering Lead</h3>
                    <p className="mb-4">Maimoona Iqbal is Company's Engineering Lead
                                    .</p>
                    <span className="inline-flex">
                      <a className="text-gray-700" href="https://www.facebbok.com/" target="_blank"   rel="noreferrer" aria-label="Facebook">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          className="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-700" href="https://www.twitter.com/" target="_blank"   rel="noreferrer" aria-label="Twitter">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          className="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="ml-2 text-gray-500" href="https://www.linkedin.com/" target="_blank"   rel="noreferrer" aria-label="Linkedin">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          className="w-6 h-6" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-12 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="text-3xl font-medium title-font mb-4 text-indigo-600">OUR SERVICES</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We assist you with pre and post-migration
              challenges and integrations to make sure your migrations are carried out flawlessly and without any
                      discrepancies in the new environment.</p>
            </div>
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 sm:w-1/4 w-1/2 ">
                <p className="leading-relaxed bg-gray-200 py-8 text-lg">Solutions For AWS</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2 ">
                <p className="leading-relaxed bg-gray-200 py-8 text-lg">Solutions For IBM</p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2 ">
                <p className="leading-relaxed bg-gray-200 py-8 text-lg">Migration </p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2 ">
                <p className="leading-relaxed bg-gray-200 py-8 text-lg">Recovery </p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full ">
            <h1 className="text-3xl font-medium title-font mb-4 text-indigo-600">TESTIMONIAL</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base mb-4">
              We have thousand of customers across the globe .We offer products and services to automate and solve
                    challenges related to Cloud Migrations & Disaster Recovery.</p>
          </div>
          <article className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
              className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">Wanclouds Inc have years of experience with Migrations, DevOps and
            Security. Whether you are seeking to migrate, optimize, and speed up your application deployment
                    process across private and public clouds its a right place to come.</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
            <p className="text-gray-500">Senior Product Designer</p>
          </article>
        </div>
      </section>
      </main>

      <footer className="text-gray-600 body-font border-t-2 border-gray-100 ">
        <nav className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round"
                strokeLinejoin="round" strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Wanclouds Inc</span>
            </a>
            <p className="mt-4 text-gray-500">2811 Mission College Blvd, 7th Floor, Santa Clara, CA 95054, USA</p>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest mb-6 text-xl ">SERVICES</h2>
              <ul className="list-none mb-10">
                <li className="mb-2">
                  <a className="text-gray-500 hover:text-gray-800" href="#">Solutions For AWS</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-500 hover:text-gray-800" href="#">Solutions For IBM</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-500 hover:text-gray-800" href="#">Migration </a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-500 hover:text-gray-800" href="#">Recovery </a>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest mb-6 text-xl ">PRODUCTS</h2>
              <ul className="list-none mb-10">
                <li className="mb-2">
                  <a className="text-gray-500 hover:text-gray-800" href="#">Vpc+</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-500 hover:text-gray-800" href="#">Ongoing Services</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-500 hover:text-gray-800" href="#">Offerings</a>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest mb-6 text-xl ">RESOURCES</h2>
              <ul className="list-none mb-10">
                <li className="mb-2">
                  <a className="text-gray-500 hover:text-gray-800" href="#">Blogs</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-500 hover:text-gray-800" href="#">Configurations</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-500 hover:text-gray-800" href="#">Support</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-500 hover:text-gray-800" href="#">Fourth Link</a>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest mb-6 text-xl ">ABOUT US</h2>
              <ul className="list-none mb-10">
                <li className="mb-2">
                  <a className="text-gray-500 hover:text-gray-800" href="#">company</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-500 hover:text-gray-800" href="#">Products</a>
                </li>
                <li className="mb-2">
                  <a className="text-gray-500 hover:text-gray-800" href="#">Services</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="bg-gray-200">
          <nav className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row ">
            <p className="text-gray-700 text-sm text-center sm:text-left mt-1 ">© 2022 —
                <a href="#" className="text-gray-700 ml-1" target="_blank"   rel="noreferrer">Wanclouds Inc</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a className="text-gray-700" href="https://www.facebook.com/" target="_blank"   rel="noreferrer" aria-label="facebook">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6"
                  viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-700" href="https://www.twitter.com/" target="_blank"   rel="noreferrer" aria-label="Twitter">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6"
                  viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-700" href="https://www.instagram.com/" target="_blank"   rel="noreferrer" aria-label="instagram">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  className="w-6 h-6" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-gray-700" href="https://www.linkedin.com/" target="_blank"   rel="noreferrer" aria-label="linkedin">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0"
                  className="w-6 h-6" viewBox="0 0 24 24">
                  <path stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </nav>
        </div>
      </footer>
    </>
  )
}
