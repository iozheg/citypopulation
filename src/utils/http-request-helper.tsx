export interface HttpRequest{
    username?: string;
    password?: string;
}

export function serverRequest(type: string, request: HttpRequest): Promise<string>{
    let url: string;
    let options = {
        method: '',
        headers: new Headers(),
        body: ''
    };

    options.method = 'POST';
    options.headers = new Headers();
    options.headers.append('Content-Type', 'application/x-www-form-urlencoded');

    if(type === 'register'){
        url = `http://localhost:4444/register/`;        
        options.body = `username=${request.username}&password=${request.password}`;
    } else if(type === 'login'){
        url = `http://localhost:4444/login/`;        
        options.body = `username=${request.username}&password=${request.password}`;
    } else {
        return;
    }
    
    return (fetch(url, options)
        .then((response: Response) => response.text())
        .then(text => text));
}