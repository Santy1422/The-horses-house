
const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className=" fixed inset-0 backdrop-blur backdrop-brightness-75 backdrop-saturate-100"></div>
      <div className=" z-50 bg-white rounded-lg shadow-lg">      
        {children}
      </div>
    </div>
  )
}

export default Modal
