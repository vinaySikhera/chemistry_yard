export async function POST(request) {
    const { username, password } = await request.json();
    console.log(username, password);
    // Perform your login logic here
    // For example, check against a database or an external service
    // Return a response based on the login result
    // if (username === 'admin' && password === 'password') {
    return new Response(JSON.stringify({ message: 'Login successful' }), { status: 200 });
    // }
    // return new Response(JSON.stringify({ message: 'Invalid credentials' }), { status: 401 });   
}
