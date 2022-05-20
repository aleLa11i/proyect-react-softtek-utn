const baseURL = import.meta.env.VITE_URL

export const fetchWithoutToken = (endpoint , data, method = "GET" ) => {
    
    const url = `${baseURL}/${endpoint}`;

    if( method === "GET" ){
        return fetch( url )
    }
    else 
    {
        return fetch( url, {
            method,
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify( data )
        });
    };
};

export const fetchWithToken = (endpoint , data, method = "GET" ) => {
    
    const token = localStorage.getItem("token");
    const url = `${baseURL}/${endpoint}`;

    if( method === "GET" || method === "DELETE"){
        return fetch( url, {
            method,
            headers:{
                "x-token":token
            }
        } )
    }
    else 
    {
        return fetch( url, {
            method,
            headers:{
                "Content-type":"application/json",
                "x-token":token
            },
            body: JSON.stringify( data )
        });
    };
};