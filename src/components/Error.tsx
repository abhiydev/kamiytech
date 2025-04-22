// import React from 'react';

// type ErrorFallbackProps = {
//   heading: string;
//   error: Error | null;
//   onRetry: () => void;
// };

// const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
//   return (
//     <div className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-red-300 dark:border-red-700 max-w-md mx-auto mt-10">
//       <h2 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-3 text-center">{error?.name}</h2>

//       {error && (
//         <div className="w-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 text-sm rounded-md p-4 mb-4 overflow-auto">
//           <code>{error.message}</code>
//         </div>
//       )}

//       <button
//         onClick={()=> window.location.reload()}
//         className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition"
//       >
//         Retry
//       </button>
//     </div>
//   );
// };

// export default ErrorFallback;
