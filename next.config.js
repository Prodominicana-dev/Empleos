/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// module.exports = {
  
//   distDir: "_next",
//   generateBuildId: async () => {
//     if (process.env.BUILD_ID) {
//       return process.env.BUILD_ID;
//     } else {
//       return `${new Date().getTime()}`;
//     }
//   },
  
// }

module.exports = {
  env: {
    API_URL: 'https://empleosapi.prodominicana.gob.do', // Apunta a tu API Nest.js
  },
};


