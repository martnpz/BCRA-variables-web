import type { PageServerLoad } from './$types';


const bcraAPI = 'https://api.bcra.gob.ar/estadisticas/v1/PrincipalesVariables'

export const load: PageServerLoad = async () => {
    const response = await fetch(bcraAPI, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const result = await response.json();

    console.log(result);

    return { result };
};