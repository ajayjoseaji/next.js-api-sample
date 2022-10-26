export default function Users({ users }) {
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(users => {
                    return (
                        <li key={users.name}>
                            {users.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export async function getStaticProps() {
    const users = await fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json());
    console.log(users);
    return {
        props: {
            users
        }
    }
}