
export const config = {
    runtime: 'edge',
};
export async function load({params, fetch}) {
    const fetchPoem = async (id) => {
        const res = await fetch(`/api/poem/${id}`)
        const data = await res.json()
        return data
    }

    return {
        poem : fetchPoem(params.id)
    }
}