import handleRequest from "../../src/handle-request";

export const config = {
    runtime: 'edge',
    // https://vercel.com/docs/edge-network/regions#region-list
    regions: [
        'arn1',
        'bom1',
        'cdg1',
        'cle1',
        'cpt1',
        'dub1',
        'fra1',
        'gru1',
        // 'hkg1', ip blocked by openai
        'hnd1',
        'iad1',
        'icn1',
        'kix1',
        'lhr1',
        'pdx1',
        'sfo1',
        'sin1',
        'syd1',
    ],
};

export default handleRequest;
