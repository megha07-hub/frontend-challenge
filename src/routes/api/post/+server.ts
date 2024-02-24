import { json, type RequestHandler } from "@sveltejs/kit"

export const GET: RequestHandler = async () => {

    const posts = [{
        slug: 'dummy',
        content: 'dummy',
    }]

    return json(posts)
}


export const POST: RequestHandler = async ({ request }) => {

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const data = await request.json();

    let responseData = {
        status: 400,
        body: {
            success: false,
            data: 'Invalid Email Address'
        }
    };
    

    if (emailPattern.test(data['email'])) {
        responseData = {
            status: 200,
            body: {
                success: true,
                data: 'Valid Email'
            }
        };
    }

    return json(responseData);

}

