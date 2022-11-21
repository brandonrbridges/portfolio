const Button = ({ children, className = '', onClick, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-orange-500 flex font-medium group items-center justify-center overflow-hidden px-6 py-2 relative hover:shadow-lg text-white tracking-wider transition-all uppercase ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
