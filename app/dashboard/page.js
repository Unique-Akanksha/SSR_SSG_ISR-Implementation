export const dynamic = "force-dynamic";
//SSR
export default async function Dashboard() {
    const time = new Date().toLocaleTimeString();

    return (
        <div>
            <h1>Dashboard</h1>
            <p>{time}</p>
        </div>
    );
}