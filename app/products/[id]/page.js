export const revalidate = 30;

export default async function ProductPage({ params }) {
    const { id } = await params;

    const res = await fetch(
        `https://dummyjson.com/products/${id}`,
        {
            next: { revalidate: 30 },
        }
    );

    const product = await res.json();

    const generatedAt = new Date().toLocaleTimeString();

    return (
        <div>
            <p>Generated At: {generatedAt}</p>
            <h2>{product.title}</h2>
            <p>₹{product.price}</p>
        </div>
    );
}
// export const revalidate = 30;

// export default async function ProductPage({ params }) {
//     const { id } = await params;

//     const res = await fetch(
//         `https://dummyjson.com/products/${id}`
//     );
//     const generatedAt =
//         new Date().toLocaleTimeString();
//     const product = await res.json();

//     return (
//         <div>
//             <p>Generated At: {generatedAt}</p>
//             <h2>{product.title}</h2>
//             <p>₹{product.price}</p>
//         </div>
//     );
// }