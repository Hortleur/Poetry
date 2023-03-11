export const ssr = false;
export const config = {
    runtime: 'edge',
};

export async function load({fetch}) {
    const fetchPoem = async () =>{
        const res = await fetch('/api/poem')
        const data = await res.json()
        return data
    }
    return {
        poems: fetchPoem()
    }
}
