/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/_next/:path*',
        destination: `https://empleos.prodominicana.gob.do/_next/:path*`,
      },
    ]
  },
} 
 
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
// const execSync = require("child_process").execSync;

// const lastCommitCommand = "git rev-parse HEAD";

// module.exports = {
//   async generateBuildId() {
//     return execSync(lastCommitCommand).toString().trim();
//   },
// };

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

// module.exports = {
//   // ...otras configuraciones...
//   // Configuración de rutas estáticas
//   async rewrites() {
//     return [
//       {
//         source: '/_next/:path*',
//         destination: `https://empleos.prodominicana.gob.do/_next/:path*`, // Cambia esto
//       },
//     ];
//   },
// };

// module.exports = {
//   env: {
//     API_URL: 'https://empleosapi.prodominicana.gob.do', // Apunta a tu API Nest.js
//   },
// };


