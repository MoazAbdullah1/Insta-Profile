/* eslint-disable react/prop-types */

export default function DarkMode({ children }) {
  return (
    <div className="dark">
        <div className="text-gray-200 bg-gray-800 min-h-screen">
            {children}
        </div>
    </div>
  )
}
