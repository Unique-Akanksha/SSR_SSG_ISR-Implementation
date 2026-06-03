import SearchBar from "./SearchBar";
export default async function HomePage() {
    const res = await fetch(
        "https://dummyjson.com/products",
        {
            cache: "force-cache"
        }
    ); const generatedAt =
        new Date().toLocaleTimeString();

    const data = await res.json();

    return (
        <>
            <SearchBar />
            <p>Generated At: {generatedAt}</p>
            <div>
                <h1>Products</h1>
                {data.products.map(product => (
                    <p key={product.id}>
                        {product.title}
                    </p>
                ))}
            </div>
        </>
    );
}