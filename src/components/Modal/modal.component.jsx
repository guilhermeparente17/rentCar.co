import React from 'react'

import { 
    ModalClose,
    ModalContainer,
    ModalContent,
    ModalHeader,
    ModalTitle,
    ModalData
} from './modal.styles'
import CardCity from '../CardCity/card-city.component';
import useStore from '../../useStore';

const Modal = ({ title, data, type}) => {

  const { setOpenModal } = useStore();

  return (
    <ModalContainer>
        <ModalContent>
            <ModalHeader>
                <ModalTitle>{title}</ModalTitle>
                <ModalClose onClick={() => setOpenModal(false)}>X</ModalClose>
            </ModalHeader>

            <ModalData>
                {type === 'citys' &&
                    data.map((citys, id) => {
                        return <CardCity key={id} citys={citys} />
                    })
                }

                {type === 'dates' &&
                    <div>selecione sua data</div>
                }
            </ModalData>
        </ModalContent>
    </ModalContainer>
  )
}

export default Modal