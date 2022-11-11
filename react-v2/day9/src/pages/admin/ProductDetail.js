import { useParams } from "react-router-dom"

export default function ProductDetail(){

    const params = useParams();

    return (
        <h1>
            Product Detail: {params.slug} <br/>
        </h1>
    )
}