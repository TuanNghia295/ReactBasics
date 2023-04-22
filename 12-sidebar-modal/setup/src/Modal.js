import React, { useMemo,useCallback } from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Modal = () => {
  const {isModalOpen,closeModal} = useGlobalContext()

  const modalClass = useMemo(() => {
    return `${isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}`
  }, [isModalOpen])

  const handleCloseModal = useCallback(()=>{
    closeModal();
  },[closeModal])

  return <div className={modalClass}>
    <div className='modal-container'>
      <h3>Modal content</h3>
      <button className='close-modal-btn'onClick={()=>handleCloseModal()}>
        <FaTimes/>
      </button>
    </div>
  </div>
}

export default Modal
