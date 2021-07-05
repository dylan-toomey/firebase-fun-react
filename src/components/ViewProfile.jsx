

function ViewProfile ( {user} ) {
    const { displayName, email, photoURL } = user
    return (
        <>
        <div class="card">
        <img src={photoURL} alt="profile-pic" />
        <h1>{displayName}</h1>
 
        <table>
            <tr>
                <td><strong>Email</strong></td>
                <td>{email}</td>
            </tr>
        </table>
    </div>

        </>
    )
}

export default ViewProfile