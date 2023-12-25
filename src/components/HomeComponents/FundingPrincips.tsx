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

  console.log(isOpen);
  return (
    <>
      <div onClick={onOpen}>
        {" "}
        <LinkComponent name="NOS PRINCIPES FONDATEURS" />
      </div>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                NOS PRINCIPES FONDATEURS
              </ModalHeader>
              <ModalBody className="px-10 pb-10 pt-5">
                <p>
                  L'accès à l'information et le partage d'expériences sont les
                  valeurs qui sont appliquéesdans notre institut.
                </p>
                <p>
                  Nous instaurons une relation gagnant-gagnant où l'on
                  s'applique à donnerautant qu'à recevoir
                </p>
                <p>
                  Nous nous engageons avant tout, pour le bien-être de
                  l'ensemble de nos adhérents et avons choisi d'élaborer des
                  programmes axés sur l'individu, tout au long de sa vie.
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
