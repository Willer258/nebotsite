/* eslint-disable react/no-unescaped-entities */
"use client";

import React from "react";

import LinkComponent from "@/components/LinkComponent";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Tooltip,
} from "@nextui-org/react";

function FundingPrincips() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  
  return (
    <>
      <div onClick={onOpen}>
        {" "}
        <LinkComponent name="NOS PRINCIPES DE COMPORTEMENT" />
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                NOS PRINCIPES DE COMPORTEMENT
              </ModalHeader>
              <ModalBody className="px-10 pb-10 pt-5">
                <p>
                  Dans une notion d'accompagnement global, nous visons
                  l'excellence. Afin de nous améliorer et de toujours
                  progresser, nous contrôlons la satisfaction.
                </p>
                <p>
                  L'institut Nebot Patrimoine prône l'abnégation dans sa forme
                  la plus simple en garantissant l'intégrité de ses
                  membresactifs vis-à-vis de leur engagement et de leur
                  implication.
                </p>
                <p>
                  La convivialité est unprincipe fondamental dans la structure,
                  pour que l'humain soit et reste au centre de la réflexion et
                  des actions.
                </p>
              </ModalBody>
              
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default FundingPrincips;
