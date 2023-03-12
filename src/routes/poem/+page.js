import PoemCards from "$lib/components/PoemCards.svelte";

export const load = async (loadEvent) =>{
    const { data } = loadEvent
    console.log(data)
    return {
        ...data,
        Component: PoemCards
    }
}