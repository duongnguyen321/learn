import { useParams, useSearchParams } from "react-router-dom"

export default function ProductDetail(){

    const params = useParams();

    const [searchParams, setParams] = useSearchParams();

    const handleSearch = (e) => {
        e.preventDefault();

        const cateId = e.target.children[0].value;

        const keywords = e.target.children[1].value;
        
        setParams({
            keywords: keywords,
            cateId: cateId
        });
    }

    return (
        <>
            <form onSubmit={handleSearch}>
                <select>
                    <option value={1}>Chuyên mục 1</option>
                    <option value={2}>Chuyên mục 2</option>
                    <option value={3}>Chuyên mục 3</option>
                </select>
                <input type="search" name="keywords" placeholder="Từ khoá..."/>
                <button type="submit">Tìm</button>
            </form>
            <h1>
                Product Slug: {params.slug} <br/>
                Product Id: {params.id} <br/>
                Keywords: {searchParams.get('keywords')} <br/>

                CateId: {searchParams.get('cateId')}
            </h1>
        </>
    )
}