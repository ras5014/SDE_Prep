import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "../queries/fetchPet";
import Carousel from "./Carousel";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const Details = () => {
  const [openModal, setOpenModal] = useState(false);
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">⌛</h2>
      </div>
    );
  }

  const pet = results.data.pets[0];

  return (
    <>
      <div className="details">
        <Carousel images={pet.images} />
        <div>
          <h1>{pet.name}</h1>
          <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
          <button onClick={() => setOpenModal(true)}>Adopt {pet.name}</button>
          <p>{pet.description}</p>
        </div>
      </div>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h1 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Would you like to adopt {pet.name}?
            </h1>
            <div className="flex justify-center gap-4">
              <Button
                style={{ backgroundColor: "#AD343E", color: "white" }}
                onClick={() => setOpenModal(false)}
              >
                Yes, adopt
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Details;
