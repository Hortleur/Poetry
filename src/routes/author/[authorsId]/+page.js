import PoemCards from "$lib/components/PoemCards.svelte";

export const load = async (loadEvent) =>{
    const { data } = loadEvent
    return {
        ...data,
        Component: PoemCards
    }
}