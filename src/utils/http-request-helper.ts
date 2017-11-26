export interface HttpRequest{
    username?: string;
    password?: string;
}

/**
 * Handles app's requests to server.
 * 
 * @export
 * @param {string} type Type of request.
 * @param {HttpRequest} request Body of request.
 * @returns {Promise<string>} 
 */
export function serverRequest(type: string, request: HttpRequest): Promise<string>{
    let url: string;
    let options = {
        method: 'POST',
        headers: new Headers(),
        body: '',
        credentials: <RequestCredentials> 'include'
    };

    options.headers.append('Content-Type', 'application/x-www-form-urlencoded');

    if(type === 'register'){
        url = `http://localhost:4444/register/`;        
        options.body = `username=${request.username}&password=${request.password}`;
    } else if(type === 'login'){
        url = `http://localhost:4444/login/`;        
        options.body = `username=${request.username}&password=${request.password}`;
    } else if(type === 'logoff'){
        url = `http://localhost:4444/logout/`;
    } else if(type === 'cities'){
        options.method = 'GET';
        options.body = null;
        url = `http://localhost:4444/cities/`;
    } else {
        return;
    }

    return (fetch(url, options)
        .then((response: Response) => response.text())
        .then(text => text));
}