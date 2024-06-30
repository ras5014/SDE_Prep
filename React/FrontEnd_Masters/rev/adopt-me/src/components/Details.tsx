import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { fetchPet } from "../queries/FetchPet"
import Carousel from "./Carousel"
import ErrorBoundary from "./ErrorBoundary"
import { useState } from "react"

import Modals from "./Modals"

const Details = () => {
    const { id } = useParams()
    const { isPending, isError, data, isSuccess } = useQuery({ queryKey: ['details', id], queryFn: fetchPet });
    const pet = data?.[0] ?? null

    // Modal Setup
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            {isPending && (<div className="loading-pane">
                <h2 className="loader">🌀</h2>
            </div>)}
            {isError && <div className="error">Error fetching data</div>}
            {isSuccess && (
                <>
                    <div className="details">
                        <Carousel images={pet.images} />
                        <div>
                            <h1>{pet.name}</h1>
                            <h2>{`${pet.animal} — ${pet.breed} — ${pet.city}, ${pet.state}`}</h2>
                            <button onClick={handleShow}>Adopt {pet.name}</button>
                            <p>{pet.description}</p>
                        </div>
                    </div>
                    <Modals show={show} handleClose={handleClose} petname={pet.name} />
                </>
            )}

        </>
    )
}

function DetailsWithErrorBoundary() {
    return (
        <ErrorBoundary>
            <Details />
        </ErrorBoundary>
    )
}

export default DetailsWithErrorBoundary 
