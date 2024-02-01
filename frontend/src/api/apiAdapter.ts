const backendURL = 'https://hug5q32o3h.execute-api.eu-central-1.amazonaws.com/production/api';

const sendEmailRoute = '/send_email'

export const sendEmailRequest = async (name: string, email: string, message: string) : Promise<boolean> => {

    return await fetch(backendURL + sendEmailRoute, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name,
            email,
            message
        })
    })
    .then((response: Response) => response.ok)
    .catch((error: Error) => {
        console.log(error);
        return false;
    });
}