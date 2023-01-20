import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { programm } from '$lib/programm/programm';
import type { ProgrammItem } from '$lib/programm/programm';

export const load = (({ params }) => {
    console.log('???');

    if (params.slug) {
        const programItem: ProgrammItem | undefined = programm.find((item) => item.slug === params.slug);
        if (programItem) {
            return {
                programItem: <ProgrammItem>programItem,
            };
        } else {
            return {};
        }
    }
    throw error(404, 'Not found');
}) satisfies PageLoad;
